"use client";
import style from "@/app/styles/form.module.css";
import Form_ from "../components/Form_";
import LoginButton from "../components/LoginButton";
import { useSession, signIn, signOut } from "next-auth/react";
const page = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div className={style.content}>
        <div className={style._divcenter}>
          <img src={session.user.image} alt="logo" className={style._logo} />
          <h2 className="text-center mt-1 text-capitalize">welcome {" "}
            {session.user.name}
          </h2>
          <p className="text-center">
            {session.user.email}
          </p>
          
          <LoginButton />
        </div>
      </div>
    );
  }

  return (
    <div className={style.content}>
      <div className={style._divcenter}>
        <img src="images/logo.png" alt="logo" className={style._logo} />
        <h2 className="text-center mt-1 text-capitalize">
          Create your account
        </h2>
        <p className="text-center">
          Please note that phone verification is required for signup. Your
          number will only be used to verify your identity for security
          purposes.
        </p>
        <Form_ />
        <small className="text-info text-uppercase mt-2 mb-2">or</small>
        <LoginButton />
      </div>
    </div>
  );
};

export default page;
