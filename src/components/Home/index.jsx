import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import background from '/src/assets/home_background.png';

export function Home() {

    return (
        <div className="relative h-screen flex flex-col items-center justify-center">
            <img src={background} alt="Home Background" className="absolute top-0 left-0 w-full h-full object-cover" />
            <div className="relative z-10 text-center">
                <Typography variant="h1" className="text-8xl text-white mb-4">
                    Introducing CoGuide:
                </Typography>
                <Typography variant="h3" className="text-4xl text-gray-200">
                    Copilot para analistas de suporte
                </Typography>
                <a href="/CoGuide">
                    <Button avariant="outlined" size="md" className="flex items-center gap-3 mt-5" color="white"

                    >
                        Saiba mais sobre CoGuide
                    </Button>
                </a>
            </div>
        </div>
    );
};
