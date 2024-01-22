import { useDarkMode } from "../context/DarkModeContext";

function NavBar() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <aside
      className={`z-10 flex w-[10rem] flex-col justify-between rounded-r-[2rem] ${isDarkMode ? "bg-[#1e2139]" : "bg-[#373b53]"}`}
    >
      <div className="flex h-[10rem] items-center justify-center rounded-r-[2rem] bg-[#7c5dfa]">
        <img src="/logo.svg" alt="invoice logo" className="h-[4rem] w-[4rem]" />
      </div>

      <div className="flex flex-col items-center">
        <div
          className="flex w-full cursor-pointer justify-center border-b border-solid border-[#494e6e] pb-12"
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
          className="mt-12 h-[4rem] w-[4rem] rounded-full"
        />
      </div>
    </aside>
  );
}

export default NavBar;
