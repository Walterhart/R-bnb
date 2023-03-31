const Hero: React.FC = () => {
  return (
    <section className="hero">
      <img
        src={process.env.PUBLIC_URL + "images/activities.png"}
        alt="Activities"
      />
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities that wil improve your lifestyle.</p>
    </section>
  );
};

export default Hero;
