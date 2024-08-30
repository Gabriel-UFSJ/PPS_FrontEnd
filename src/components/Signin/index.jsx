import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import brandDark from "/src/assets/brand.png";
import { Card, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";
import { useAuth } from "/src/contexts/authContext";

export function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      Swal.fire({
        icon: "success",
        title: "Login realizado com sucesso!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erro ao fazer login!",
        text: "Email ou senha inválidos",
      });
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-b from-blue-500 to-blue-800">
      <Card className="w-full max-w-[20rem] p-8 shadow-xl shadow-blue-gray-900/5 bg-white rounded-lg">
        <div className="flex flex-col items-center mb-8">
          <Typography variant="h6" color="blue-gray" className="mb-4">
            Sign in to your account
          </Typography>
          <a href="/">
            <img
              src={brandDark}
              alt="brand"
              className="h-20 w-20 object-contain mb-4"
            />
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              Your email
            </Typography>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-blue-500 focus:outline-none focus:border-blue-600 placeholder-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              Password
            </Typography>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-blue-500 focus:outline-none focus:border-blue-600 placeholder-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Sign In
          </button>
        </form>

        <Typography color="gray" className="mt-4 text-center">
          {"Don't have an account? "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up!
          </Link>
        </Typography>
      </Card>
    </div>
  );
}
