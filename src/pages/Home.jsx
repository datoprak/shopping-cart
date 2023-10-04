import "../styles/Home.css";
import image from "../assets/headerImg.jpg";

const Home = () => {
  return (
    <div className="home">
      <section className="left-section">
        <h1 className="hero-header">
          Welcome to <span>The Shop</span>
        </h1>
        <p className="hero-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          fermentum pellentesque volutpat. Fusce convallis posuere suscipit.
          Praesent non sagittis risus. Nam viverra elit metus, id mattis sem
          congue sit amet. Nulla porttitor ipsum vitae odio sodales, vel feugiat
          neque scelerisque.
        </p>
        <p className="hero-text">
          Nam viverra elit metus, id mattis sem congue sit amet. Nulla porttitor
          ipsum vitae odio sodales, vel feugiat neque scelerisque.
        </p>
        <p className="hero-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          fermentum pellentesque volutpat. Fusce convallis posuere suscipit.
          Praesent non sagittis risus.
        </p>
      </section>
      <section className="right-section">
        <img src={image} alt="header hero image with coats" />
      </section>
    </div>
  );
};

export default Home;
