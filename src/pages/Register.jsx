import { Logo, FormRow } from "../components/index";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";


const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const navigate=useNavigate()
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch()
  const { isLoading,user}= useSelector((store)=>store.user)


  useEffect(()=>{
    if(user){
      setTimeout(()=>{
        navigate("/")
      },3000)
    }
  },[user])

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    // values[name] = value;
  setValues({ ...values,[name]:value})
    
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(values);
    const {name,email,password,isMember}= values
    // setValues({ name: "", email: "", password: "", isMember: true });
    // toast.error("Naptın!!!")
    // toast("Naptın!!!")
    // toast.success("Naptın!!!")
    // toast.warning("Naptın!!!")
    if(values.isMember){
      dispatch(loginUser({ email:email,password:password }));

      return;
    }

      dispatch(registerUser({name,email,password}))
    
  };

const toggleMember =()=>{
  setValues({...values,isMember:!values.isMember})
}


  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* name */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            values={values.name}
            handleChange={handleChange}
          />
        )}
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
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
