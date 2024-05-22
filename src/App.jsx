import UserLogin from "./components/UserLogin";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden h-screen w-full xl:block xl:w-1/2">
            <div className="px-26 py-17.5 text-center">
              <Link className="mb-5.5 inline-block" to="/">
                {/* <img className="hidden dark:block"  src={"/src/logo/logohalfcolor.png"} alt="Logo" />
                <img className="dark:hidden" src={"/src/logo/logohalfwhite.png"} alt="Logo" /> */}
              </Link>

              <span className="mt-15 inline-block">
                <img
                  src={"brandingLogoHomePage.png"}
                  className="w-80"
                  alt="uvnl branding"
                />
              </span>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <Link className="mb-5.5  flex justify-center " to="/">
                <img
                  className="hidden w-40 dark:block "
                  src={"mainLogoDark.png"}
                  alt="Logo"
                />
                <img
                  className="block w-40  dark:hidden  lg:hidden "
                  src={"mainLogoLight.png"}
                  alt="Logo"
                />
              </Link>
              <UserLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
