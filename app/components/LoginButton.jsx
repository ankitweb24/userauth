"use client";
import { signIn, useSession, signOut } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const LoginButton = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div className="d-flex justify-content-center aligns-item-center flex-column">
        {session.user.image.includes("github") ? (
          <button
            onClick={() => {
              signOut();
            }}
            type="button"
            className="d-flex justify-content-center align-items-center btn btn-outline-success ps-3 pe-3 pt-2 pb-2"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              signOut();
            }}
            type="button"
            className="d-flex justify-content-center align-items-center btn btn-outline-danger ps-3 pe-3 pt-2 pb-2"
          >
            Logout
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center aligns-item-center flex-column">
      <button
        onClick={() => {
          signIn("github");
        }}
        type="button"
        className="d-flex justify-content-center align-items-center btn btn-outline-success ps-3 pe-3 pt-2 pb-2"
      >
        Continue with Github
      </button>
      <button
        onClick={() => {
          signIn("google");
        }}
        type="button"
        className="d-flex justify-content-center align-items-center btn btn-outline-danger ps-3 pe-3 pt-2 pb-2 mt-3"
      >
        <FcGoogle className="me-2" /> Continue with Google
      </button>
    </div>
  );
};

export default LoginButton;
