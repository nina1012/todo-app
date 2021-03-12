import PropTypes from 'prop-types';
import './Hero.css';
const Hero = ({ darkMode }) => {
  const image = `./images/bg-desktop-${darkMode ? 'dark' : 'light'}.jpg`;
  return (
    <div className="hero">
      <img src={image} alt="Background " />
    </div>
  );
};

Hero.propTypes = {
  darkMode: PropTypes.bool
};

export default Hero;
