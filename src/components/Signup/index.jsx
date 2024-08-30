import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import brandDark from "/src/assets/brand.png";

import { Card, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";

export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Senhas não correspondem",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      console.log(data);
      if (data.error) {
        Swal.fire({
          icon: "error",
          title: "Erro ao cadastrar usuário!",
          text: data.error,
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Usuário cadastrado com sucesso!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-b from-blue-500 to-blue-800">
      <Card className="w-full max-w-[20rem] p-8 shadow-xl shadow-blue-gray-900/5 bg-white rounded-lg">
        <div className="flex flex-col items-center mb-8">
          <Typography variant="h6" color="blue-gray" className="mb-4">
            Create an account
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
              Your name
            </Typography>
            <input
              className="w-full px-3 py-2 rounded-md border border-blue-500 focus:outline-none focus:border-blue-600 placeholder-blue-500"
              type="text"
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              Confirm password
            </Typography>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-blue-500 focus:outline-none focus:border-blue-600 placeholder-blue-500"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Create
          </button>
        </form>

        <Typography color="gray" className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500 hover:underline">
            Sign in!
          </Link>
        </Typography>
      </Card>
    </div>
  );
}
