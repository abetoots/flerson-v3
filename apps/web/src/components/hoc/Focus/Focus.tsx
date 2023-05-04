import React from "react";

type FocusProps = {
  keyBoardOnly?: boolean;
  applyClassName?: string;
  run?: (shouldFocus: boolean) => void;
  children: JSX.Element;
};

//Focus handler that determines gives us flexibility on which elements should be focused 'normally' or on keyboard users only
//@Watch: We handle it manually until :focus-visible is supported fully
//NOTE: This is only for handling the 'visual' focus. Internally, it shouldn't prevent
//the actual focus event.
const Focus = ({
  children,
  keyBoardOnly = false,
  applyClassName,
  run,
}: FocusProps) => {
  const focusHandler = (
    e: React.FocusEvent<HTMLElement> &
      React.KeyboardEvent<HTMLElement> &
      React.MouseEvent<HTMLElement>
  ) => {
    if (keyBoardOnly) {
      if (e.type === "mousedown") {
        if (applyClassName) {
          e.target.classList.remove(applyClassName);
        }
      }
      if (e.type === "keyup") {
        //we listen to keyup because keydown is too late
        //if key code is tab
        if (e.key === "Tab") {
          //should focus
          e.target.focus();
          if (applyClassName) {
            e.target.classList.add(applyClassName);
          }
          //run addional funcs
          if (run) {
            run(true);
          }
        }
      } else if (e.type === "blur") {
        //this will be the blur event
        e.target.blur();
        if (applyClassName) {
          e.target.classList.remove(applyClassName);
        }
        //run additional funcs
        if (run) {
          run(false);
        }
      }
    } else {
      //Handles normal focus behavior
      if (e.type === "focus") {
        e.target.focus();
        if (applyClassName) {
          e.target.classList.add(applyClassName);
        }
        if (run) {
          run(true);
        }
      } else if (e.type === "blur") {
        //this will be the blur event
        e.target.blur();
        if (applyClassName) {
          e.target.classList.remove(applyClassName);
        }
        //run additional funcs
        if (run) {
          run(false);
        }
      }
    }
  };

  return React.cloneElement(children, {
    onFocus: focusHandler,
    onBlur: focusHandler,
    onKeyUp: focusHandler,
    onMouseDown: focusHandler,
  });
};

export default Focus;
