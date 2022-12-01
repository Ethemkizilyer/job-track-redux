import main from "../assets/images/main.svg"
import Wrapper from "../assets/wrappers/LandingPage";
import {Logo} from "../components/index";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
       <Logo/>
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          aliquid a nesciunt illum explicabo adipisci, repellat repellendus
          voluptates debitis non!
        </p>
        <button className="btn btn-hero">Login/Register</button>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}



export default Landing