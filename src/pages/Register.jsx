import { Logo, FormRow } from "../components/index";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useState } from "react";
import { toast } from "react-toastify";


const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    // values[name] = value;
  setValues({ ...values,[name]:value})
    
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setValues({ name: "", email: "", password: "", isMember: true });
    // toast.error("Naptın!!!")
    // toast("Naptın!!!")
    // toast.success("Naptın!!!")
    // toast.warning("Naptın!!!")
  };

const toggleMember =()=>{
  setValues({...values,isMember:!values.isMember})
}


  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember? "Login" : "Register"}</h3>
        {/* name */}
        {!values.isMember && (<FormRow
          type="text"
          name="name"
          values={values.name}
          handleChange={handleChange}
        />) }
        {/* email */}
        <FormRow
          type="email"
          name="email"
          values={values.email}
          handleChange={handleChange}
        />
        {/* password */}
        <FormRow
          type="password"
          name="password"
          values={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" className="member-btn" onClick={toggleMember}>{values.isMember ? "Register" :"Login"}</button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
