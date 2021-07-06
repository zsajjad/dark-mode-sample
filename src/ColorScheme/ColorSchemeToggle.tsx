
/**
 *
 * ColorSchemeToggle
 *
 */
import Toggle from 'react-toggle';
import "react-toggle/style.css"
import { useColorScheme } from './useColorScheme';

const ColorSchemeToggle: React.FC = () => {
  const { isDark, setIsDark } = useColorScheme();
  return (
    <div className="toggle-container">
      <Toggle
        checked={isDark}
        onChange={(event) => setIsDark(event.target.checked)}
        icons={{ checked: '🌙', unchecked: '🔆' }}
        aria-label="Dark mode"
      />
    </div>
  );
};

export default ColorSchemeToggle;