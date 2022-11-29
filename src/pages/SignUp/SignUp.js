import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import logo from "../../images/logo2.png";
import { toast } from 'react-hot-toast';

const SignUp = () => {
  const [error, setError] = useState("");
    const { user, createUser, updateName } = useContext(AuthContext);
    console.log(user);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (!/.{8,}/.test(password)) {
      setError("Password must be 8 chars long!");
      return;
    }

    if (password !== confirm) {
      setError("Password did not matched!");
      return;
    }
    setError("");

    createUser(email, password).then((result) => {
        const user = result.user;
        updateName(name)
        .then(() => {})
        console.log(user);
        toast.success('Account Created!');
        form.reset();
    }).catch(error => {
        toast.error(error.message);
    })
  };
  return (
    <div>
      <form
        onSubmit={handleSignUp}
        className="flex flex-col space-y-6 items-center mb-8"
      >
        <img src={logo} alt="" className="w-[200px] mb-5" />
        <input
          type="text"
          name="name"
          className=" py-3 px-3 w-1/4 block outline-0 rounded bg-[#f5f5f5]"
          placeholder="name"
          required
        />
        <input
          type="email"
          name="email"
          className=" py-3 px-3 w-1/4 block outline-0 rounded bg-[#f5f5f5]"
          placeholder="something@email.com"
          required
        />
        <input
          type="password"
          name="password"
          className="block py-3 px-3 w-1/4 outline-0 rounded bg-[#f5f5f5]"
          id=""
          placeholder="password"
          required
        />
        <input
          type="password"
          name="confirm"
          className="block py-3 px-3 w-1/4 outline-0 rounded bg-[#f5f5f5]"
          id=""
          placeholder="confirm password"
          required
        />
        <p className="text-red-600">{error}</p>
        <button
          type="submit"
          className="py-3 px-2 w-1/4 text-white bg-[#f91944] rounded"
        >
          Sign Up
        </button>
        <Link to="/login">
          <p className="text-[#f91944]">
            <small>Already Have an Account?</small>
          </p>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
