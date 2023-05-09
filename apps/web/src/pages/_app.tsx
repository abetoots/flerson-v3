//Components
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

//Misc
import { api } from "~/lib/api";
import { Dosis, Inter } from "next/font/google";
import "~/styles/globals.css";

//Types
import { type Session } from "next-auth";
import { type AppType } from "next/app";

const inter = Inter({ subsets: ["latin"] });
const dosis = Dosis({ subsets: ["latin"] });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ToastContainer
        autoClose={false}
        hideProgressBar={true}
        draggable={false}
        closeButton={false}
      />
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${dosis.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
