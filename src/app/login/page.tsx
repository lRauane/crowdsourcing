'use client'
import LoginSideBarImage from "./components/LoginSideBarImage";
import RegisterForm from "./components/RegisterForm";

export default function Login() {
  return (
    <main className="flex h-screen">
      <LoginSideBarImage />
      <div className="flex-1 flex items-center justify-center">
        {/* <LoginForm /> */}
        <RegisterForm />
      </div>
    </main>
  );
}
