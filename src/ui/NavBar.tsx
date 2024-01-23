import { useDarkMode } from "../context/DarkModeContext";

function NavBar() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <aside
      className={`laptop:h-[10rem] mobile:h-[7rem] z-10 flex w-[10rem] flex-col justify-between rounded-r-[2rem] ${isDarkMode ? "bg-[#1e2139]" : "bg-[#373b53]"} laptop:w-full laptop:flex-row laptop:pb-0 laptop:pr-8 laptop:rounded-none pb-8`}
    >
      <div className="mobile:h-[7rem] mobile:w-[7rem] flex h-[10rem] w-[10rem] items-center justify-center rounded-r-[2rem] bg-[#7c5dfa]">
        <img
          src="/logo.svg"
          alt="invoice logo"
          className="mobile:h-[3rem] mobile:w-[3rem] h-[4rem] w-[4rem]"
        />
      </div>

      <div className="laptop:flex-row flex flex-col items-center">
        <div
          className="laptop:border-r laptop:border-b-[0] laptop:pb-0 laptop:pr-12 laptop:h-full flex w-full cursor-pointer items-center justify-center border-b border-solid border-[#494e6e] pb-12"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <img src="/icon-sun.svg" alt="sun icon" />
          ) : (
            <img src="/icon-moon.svg" alt="moon icon" />
          )}
        </div>

        <img
          src="/image-avatar.jpg"
          alt="user image"
          className="laptop:mt-0 laptop:ml-12 mt-12 h-[4rem] w-[4rem] rounded-full"
        />
      </div>
    </aside>
  );
}

export default NavBar;
