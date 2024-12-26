"use client";

import { login } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SubmitButton from "./SubmitButton";

const LoginForm = () => {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    setPending(true);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await login(formData);

      if (!!response.error) {
        setError(response.error.message);
      } else {
        router.push("/bookings");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      {error && <div className="text-xl text-red-500 text-center">{error}</div>}
      <form className="login-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <SubmitButton text="Login" pending={pending} />
      </form>
    </>
  );
};

export default LoginForm;
