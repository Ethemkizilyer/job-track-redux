import logo from "../assets/images/logo.svg"
import main from "../assets/images/main.svg"
import styled from "styled-components"

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobster logo" className="logo" />
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

const Wrapper= styled.main`
nav{
width: var(--fluid-width);
max-width: var(--max-width);
margin:0 auto;
height: var(--nav-height);
display: flex;
align-items: center;
}
.page{
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
}
h1{
    font-weight: 700;

    span{
        color: var(--primary-500);
    }
}
p{
    color: var(--grey-600);
}
.main-img{
    display: none;
}
@media (min-width:992px){
    .page{
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem;
    }
    .main-img{

    }
}



`

export default Landing