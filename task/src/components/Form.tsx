import { ChangeEvent, FormEvent, useState } from "react";
import "../pages/register.css"
const Form = () => {
  type Data = {
    fname: string;
    lname: string;
    email: string;
    pwd: string;
    conditions: boolean;
  };

  const [data, setData] = useState<Data>({
    fname: "",
    lname: "",
    email: "",
    pwd: "",
    conditions: false,
  });

  const updateData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    console.log(e.target);
  };

  const submitFunction = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailVerificationFunction(data.email)) {
      let existingUsers = JSON.parse(localStorage.getItem("userData") || "[]");
      if (!Array.isArray(existingUsers)) {
        existingUsers = [];
      }
      existingUsers.push(data);
      localStorage.setItem("userData", JSON.stringify(existingUsers));
      alert("successfully Registered");
    } else {
      alert("Invalid Email");
    }
  };

  const emailVerificationFunction = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const resetForm = () => {
    setData({
      fname: "",
      lname: "",
      email: "",
      pwd: "",
      conditions: false,
    });
  };

  return (
    <div className="container">
      <div className="detailsBox">
        <div className="header">
          <h1>Register</h1>
          <p></p>
        </div>
        <form onSubmit={submitFunction}>
          <input
            type="text"
            id="fname"
            name="fname"
            value={data.fname}
            placeholder="first name"
            onChange={updateData}
          />
          <input
            type="text"
            id="lname"
            name="lname"
            value={data.lname}
            placeholder="last name"
            onChange={updateData}
          />
          <input
            type="text"
            id="email"
            name="email"
            value={data.email}
            onChange={updateData}
            placeholder="mail@gmail.com"
          />
          <input
            type="password"
            id="pwd"
            name="pwd"
            value={data.pwd}
            onChange={updateData}
            placeholder="********"
          />
          <div className="condition">
            <input
              type="checkbox"
              id="conditions"
              name="conditions"
              checked={data.conditions}
              className="checkbox"
              onChange={updateData}
            />
            <label htmlFor="conditions">I accept terms & conditions</label>
          </div>
          <input
            type="submit"
            value="Register"
            className="btn"
            onClick={resetForm}
          />
          <p className="already">
            Already have an account? <span className="login">login now</span>
          </p>
        </form>
      </div>
      <div className="description">Beautiful Sign up form</div>
    </div>
  );
};

export default Form;
