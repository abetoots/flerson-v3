//Components
import Checkbox, { CheckboxInput } from "~/components/Checkbox/Checkbox";
import Button from "~/components/Button/Button";
import Image from "next/image";

//Misc
import styles from "./JobFilters.module.scss";
import React, { useRef, useState } from "react";
import icons from "~/assets/category-icons";
import { Category, EmploymentType } from "@prisma/client";
import classNames from "classnames";

const categories = [
  {
    value: Category.Programming,
    label: "Programming & Tech",
    description: "sample",
    src: icons.software as string,
  },
  {
    value: Category.VA,
    label: "Virtual Assitance",
    src: icons.virtualAssistant as string,
  },
  {
    value: Category.Design,
    label: "Design",
    src: icons.design as string,
  },
  {
    value: Category.Marketing,
    label: "Marketing",
    src: icons.marketing as string,
  },
  {
    value: Category.Writing,
    label: "Writing",
    src: icons.writing as string,
  },
  {
    value: Category.Teaching,
    label: "Teaching",
    src: icons.teaching as string,
  },
  {
    value: Category.NonTech,
    label: "Non-Tech",
    src: icons.nonTech as string,
  },
];

type CategoryOption = (typeof categories)[0];

const employmentTypes = [
  {
    value: EmploymentType.FULL_TIME,
    label: "Full Time",
  },
  {
    value: EmploymentType.PART_TIME,
    label: "Part Time",
  },
  {
    value: EmploymentType.CONTRACTOR,
    label: "Freelance/Contract",
  },
];

type EmploymentTypeOption = (typeof employmentTypes)[0];

export type JobFiltersProps = {
  isHidden: boolean;
  onFilter: (props: {
    pickedCategories: string[];
    pickedEmploymentTypes: string[];
    categories: CategoryOption[];
    employmentTypes: EmploymentTypeOption[];
  }) => void | Promise<void>;
};

//responsible for filtering current posts in context
//filters by cateogry, employment type, or both
const JobFilters = ({ isHidden = false, onFilter }: JobFiltersProps) => {
  const [pickedCategories, setPickedCategories] = useState<string[]>([]);
  const [pickedEmploymentTypes, setPickedEmploymentTypes] = useState<string[]>(
    []
  );

  const checkboxRefs = useRef<Map<string, HTMLElement> | null>(null);

  const getMap = () => {
    if (!checkboxRefs.current) {
      // Initialize the Map on first usage.
      checkboxRefs.current = new Map();
    }
    return checkboxRefs.current;
  };

  const focusHandler = (value: string, shouldFocus: boolean) => {
    const map = getMap();
    const node = map.get(value);
    if (styles._focused) {
      if (shouldFocus) {
        node?.classList.add(styles._focused);
      } else {
        node?.classList.remove(styles._focused);
      }
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        void onFilter({
          categories,
          employmentTypes,
          pickedCategories,
          pickedEmploymentTypes,
        });
      }}
      className={classNames(styles.JobFilters, {
        [styles._show || ""]: !isHidden,
      })}
    >
      <div>
        <Checkbox
          classes={{
            root: styles.Categories,
            fieldset: styles.Categories__fieldset,
          }}
          options={categories}
          valueAccessor="value"
          labelAccessor="label"
          heading="Category"
          values={pickedCategories}
          onChangeState={(newVal) => setPickedCategories(newVal)}
          renderCheckbox={({
            checked,
            label,
            value,
            checkboxHandler,
            option,
          }) => (
            <div
              key={value}
              className={styles.Categories__checkboxContainer}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(value, node);
                } else {
                  map.delete(value);
                }
              }}
            >
              <CheckboxInput
                inputClassname={styles.Categories__checkboxInput}
                key={value}
                value={value}
                onChange={(e) => {
                  console.log("event", e.target.checked);
                  checkboxHandler({
                    event: e,
                    currentValue: value,
                    values: pickedCategories,
                  });
                }}
                checked={checked}
                label={label}
                labelClassname={styles.Categories__checkboxLabel}
                onFocus={(shouldFocus) => focusHandler(value, shouldFocus)}
                renderLabel={() => (
                  <>
                    <div className={styles.Categories__customCheckbox}></div>
                    <Image
                      width={100}
                      height={100}
                      className={styles.Categories__image}
                      src={option.src}
                      alt={`Icon of ${option.label}`}
                    />
                    {label}
                  </>
                )}
              />
            </div>
          )}
        />
      </div>
      <div className={styles.JobFilters__item}>
        <Checkbox
          classes={{
            inputContainer: styles.EmploymentTypes__checkboxContainer,
            input: styles.EmploymentTypes__checkboxInput,
          }}
          heading="Employment Types"
          options={employmentTypes}
          valueAccessor="value"
          labelAccessor="label"
          values={pickedEmploymentTypes}
          onChangeState={(newVal) => setPickedEmploymentTypes(newVal)}
        />
      </div>

      <div className={styles.JobFilters__item}>
        <Button
          classes={{ root: styles.JobFilters__filterButton }}
          type="submit"
        >
          Filter Jobs
        </Button>
      </div>
    </form>
  );
};

export default JobFilters;
