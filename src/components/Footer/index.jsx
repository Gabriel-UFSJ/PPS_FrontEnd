import React from "react";
import brandDark from '/src/assets/brandDark.png';

export function Footer() {
  return (
    <footer className="bg-blue-gray-900 text-white p-4 pb-1">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <img src={brandDark} alt="CoGuide Logo" className="h-11 mr-4" />
        <p className="text-sm">
          &copy; 2024 CoGuide. Todos os direitos reservados.
        </p>
        <a href="mailto:gabrielmeireles2001@hotmail.com.br" className="text-md hover:underline">
          CoGuide_atendimento@gmail.com
        </a>
      </div>
    </footer>
  );
};