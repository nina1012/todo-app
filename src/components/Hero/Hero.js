import './Hero.css';
const Hero = ({ darkMode, changeMode }) => {
  const image = `./images/bg-desktop-${darkMode ? 'dark' : 'light'}.jpg`;
  return (
    <div className="hero">
      <img src={image} alt="Background " />
    </div>
  );
};

export default Hero;
