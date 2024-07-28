import { useTheme } from '../hooks/useTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center ml-4 rounded-full"
      style={{
        backgroundColor: 'var(--button-bg-color)',
        color: 'var(--button-text-color)',
      }}
    >
      <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
    </Button>
  );
};

export default ThemeToggle;
