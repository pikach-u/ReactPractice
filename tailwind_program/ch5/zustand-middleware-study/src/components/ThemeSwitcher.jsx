import useThemeStore from "../store/themeStore";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div>
      <p>현재 테마: {theme}</p>
      <button onClick={toggleTheme}>테마 전환</button>
    </div>
  );
};

export default ThemeSwitcher;
