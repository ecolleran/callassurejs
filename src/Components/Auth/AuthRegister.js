import React, { useEffect, useState } from "react";
import { checkUser, createUser } from "./AuthService.js";
// stateless child comp.
import AuthForm from "./AuthForm.js";
import { useNavigate } from "react-router-dom";

const AuthRegister = () => {
  const navigate = useNavigate();
  // making a small user object
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    paymentPlan: 1, //default payment plan
  });

  //flag var as a state to watch for add/remove updates
  //sees if database should be called or not
  const [add, setAdd] = useState(false);

  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    if (newUser && add) {
      // asyn so need a promise
      createUser(newUser).then((userCreated) => {
        if (userCreated) {
          alert(`${userCreated.get("firstName")}, you sucessfully registered!`);
          navigate("/user-home");
        }
        setAdd(false);
      });
    }
  }, [navigate, newUser, add]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);
    setNewUser({ ...newUser, [name]: newValue });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);
    setAdd(true);
  };

  return (
    <div>
      {/* stateless child cant request to db the parent must */}
      <AuthForm
        user={newUser}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};

export default AuthRegister;