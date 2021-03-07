import './MainContent.css';

import ToggleMode from '../ToggleMode/ToggleMode';
import Filter from '../Filter/Filter';

const MainContent = props => {
  const className = `main ${props.darkMode ? 'dark' : 'light'}`;
  return (
    <main className={className}>
      <ToggleMode {...props} />
      <Filter {...props} />
    </main>
  );
};

export default MainContent;
