import { Link } from "react-router-dom"
import img from "../assets/images/not-found.svg"
import Wrapper from "../assets/wrappers/ErrorPage"

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Page Not found</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, illum.</p>
      <Link to="/">Back Home</Link>
      </div>

    </Wrapper>
  )
}

export default Error