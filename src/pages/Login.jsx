import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { loginUser } from "../services/authService";
import CookieConsent from "../components/CookieConsent";
const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const result = await loginUser(formData);

      if (result.success) {
        localStorage.setItem("user", JSON.stringify(result.userData));

        navigate("/homebank");
      } else {
        setError(result.message || "Invalid credentials");
      }
    } catch (err) {
      setError("An error occurred while logging in.");
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#16161E]">
      <div className="bg-[#16161E] p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#E1E1E1] text-left mb-6">
          Log in
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-3 mb-4 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-zinc-400 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b border-zinc-600 focus:outline-none focus:ring-0 focus:border-green-300 bg-[#16161E] text-[#E1E1E1]"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-zinc-400 font-medium mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border-b border-zinc-600 focus:outline-none focus:ring-0 focus:border-green-300 bg-[#16161E] text-[#E1E1E1]"
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400"
              >
                {showPassword ? (
                  <EyeOffIcon className="w-6 h-6" />
                ) : (
                  <EyeIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-300 text-[#16161E] py-2 rounded-xl hover:bg-green-700 transition"
          >
            Enter
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={() => navigate("/signup")}
            className="text-zinc-400 hover:underline"
          >
            Don't have an account? Sign up
          </button>
        </div>
      </div>

      <button
        onClick={() => navigate("/")}
        className="absolute bottom-4 text-green-600 hover:text-green-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 transform -rotate-90"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <CookieConsent />
    </div>
  );
};

export default Login;
