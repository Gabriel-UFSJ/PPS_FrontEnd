import React from "react";
import { Typography, Card, Button } from "@material-tailwind/react";
import background from '/src/assets/about_background.png';

export function About() {
    return (
        <div>
            <div className="h-[calc(50vh-2rem)] flex items-center justify-center">
                <Typography variant="h1" className="font-bold text-blue-gray-900 mb-4 mr-20 ml-10">
                    About
                </Typography>
                <Typography variant="h4" className="font-bold text-blue-gray-900 mb-4 ml-20 mr-10">
                    CoGuide é a sua parceira definitiva em atendimento ao cliente. Nossa plataforma
                    avançada oferece suporte excepcional, capacitando sua equipe de analistas de
                    suporte a fornecer assistência de forma mais rápida e eficaz. Com a CoGuide,
                    você eleva o padrão do atendimento da sua empresa, garantindo satisfação
                    do cliente em todos os momentos.
                </Typography>
            </div>
            <div>
                <img src={background} alt="About Background" className="p-5 object-cover" />
            </div>
            <div className="mt-10">
                <Card className="w-full max-w-md bg-white p-4 shadow-md">
                    <Typography variant="h1" className="mb-10 text-center text-black">
                        Equipe CoGuide:
                    </Typography>

                    <div className="flex items-center gap-4 justify-center">
                        <div className="flex flex-col items-center">
                            <Typography variant="h5" className="mt-2">
                                Gabriel Meireles
                            </Typography>
                            <Typography variant="h3" className="text-gray-500">
                                Desenvolvedor
                            </Typography>
                        </div>
                    </div>
                </Card>
                <div className="w-[calc(100vw-3rem)]">
                    <Button
                        variant="gradient"
                        size="lg"
                        className="w-full m-5"
                        ripple="light"
                    >
                        Trabalhe Conosco
                    </Button>
                </div>
            </div>
        </div>
    );
};
