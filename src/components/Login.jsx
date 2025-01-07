import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authlogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authlogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex item-center justify-center w-full">
      <div className="">
        <h2>Sign in to your account</h2>
        <p className="">
          Don't have account?
          <Link to="/signup" className="">
            Signup
          </Link>
        </p>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit(login)}>
          <div>
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email"), {
                required: true,
                validate: {
                    matchPattern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                      "Email address must be a valid address",
                  },
              }}
            />
            <Input 
            label="Password :"
            placeholder="Enter your password"
            type="password"
            {...register("password", {
                required: true,
            })}
            />
            <Button type="Submit">
                Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
