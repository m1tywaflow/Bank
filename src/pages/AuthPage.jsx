import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import googleImg from "../assets/somethings/googleImg.png";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from "../../firebase";
import loginBg from "../assets/somethings/Login.png";
const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const validateForm = () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    return true;
  };

  const register = async () => {
    if (!validateForm()) return;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      setError("");
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const login = async () => {
    if (!validateForm()) return;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      setError("");
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1A1A1A]">
      <div
        className="p-10 rounded-2xl shadow-xl w-full max-w-5xl text-center"
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        <h2 className="text-4xl font-bold text-lime-400 mb-4">Login</h2>
        <p className="text-gray-400 mb-6">
          Welcome back! Please log in to access your account.
        </p>

        {user ? (
          <div>
            <p className="text-white mb-4">Hello, {user.email}</p>
            <button
              onClick={() => setUser(null)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#1A1A1A] text-white px-4 py-3 rounded-full placeholder-gray-500 outline-none"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#1A1A1A] text-white px-4 py-3 rounded-full placeholder-gray-500 w-full outline-none"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <p className="text-sm text-gray-500 underline cursor-pointer mb-2">
              Forgot Password?
            </p>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              onClick={login}
              className="bg-[#CAFF33] text-black py-3 rounded-full font-medium hover:bg-lime-900 transition cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={register}
              className="bg-[#262626] text-white py-3 rounded-full font-medium hover:bg-gray-700 transition cursor-pointer"
            >
              Sign Up
            </button>
            <div className="flex items-center pt-4">
              <hr className="flex-grow border-gray-600" />
              <span className="mx-2 text-gray-400 text-sm">
                Or Continue with
              </span>
              <hr className="flex-grow border-gray-600" />
            </div>

            <div className="flex justify-center mt-4">
              <button
                onClick={loginWithGoogle}
                className="w-20 h-20 border cursor-pointer rounded-full flex items-center justify-center hover:bg-gray-100 transition"
              >
                <img
                  src={googleImg}
                  alt="Google"
                  className="w-30 h-30 object-contain"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
