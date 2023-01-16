import Button from "../../components/Button/Button";
import "./home.scss";
import heroImage from '../../assets/hero image.png'
import transactionImage from '../../assets/transaction.png'
import paulImage from '../../assets/paul.png'

const Home = () => {
  return (
    <section className="home">
      <div className="home__left">
        <h1>
          Make easy digital assets <br />
          transactions anywhere, <br /> anytime with Jupit.
        </h1>
        <p>
          A place for everyone who wants to simply buy and <br />
          sell digital assets, it just takes 120 seconds!
        </p>
        <button type="">Get Started</button>
      </div>
      <div className="home__right">
        <img src={heroImage} alt='Hero__Image' className="hero__image" />
        <img src={transactionImage} alt='Hero__Image' className="transaction__image" />
        <img src={paulImage} alt='Hero__Image' className="wallet__image" />
        
      </div>
    </section>
  );
};

export default Home;
