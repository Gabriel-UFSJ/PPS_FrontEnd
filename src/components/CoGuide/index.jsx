import React from "react";
import { Typography, Card, Button } from "@material-tailwind/react";

export function CoGuide() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="mb-10 text-center mt-5">
                <Typography variant="h1" className="font-bold text-blue-gray-900 mb-4">
                    CoGuide: Ferramenta AI LLM para Atendentes de Suporte
                </Typography>
                <Typography variant="h4" className="font-bold text-blue-gray-900">
                    A CoGuide é sua parceira definitiva em atendimento ao cliente. Nossa plataforma
                    avançada oferece suporte excepcional, capacitando sua equipe de analistas de
                    suporte a fornecer assistência de forma mais rápida e eficaz. Com a CoGuide,
                    você eleva o padrão do atendimento da sua empresa, garantindo satisfação
                    do cliente em todos os momentos.
                </Typography>
            </div>
            <div className="w-full max-w-screen-lg mb-10">
                <Card className="bg-white p-8 shadow-md">
                    <Typography variant="h1" className="mb-8 text-center text-black">
                        O que a CoGuide faz?
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col items-center">
                            <Typography variant="h5" className="mb-2">
                                Responde perguntas instantaneamente
                            </Typography>
                            <Typography variant="h3" className="text-gray-500 text-center">
                                A CoGuide fornece respostas precisas e contextualizadas em tempo real.
                            </Typography>
                        </div>
                        <div className="flex flex-col items-center">
                            <Typography variant="h5" className="mb-2">
                                Sugere soluções personalizadas
                            </Typography>
                            <Typography variant="h3" className="text-gray-500 text-center">
                                A CoGuide identifica a melhor solução para cada problema do cliente.
                            </Typography>
                        </div>
                        <div className="flex flex-col items-center">
                            <Typography variant="h5" className="mb-2">
                                Automatiza tarefas repetitivas
                            </Typography>
                            <Typography variant="h3" className="text-gray-500 text-center">
                                A CoGuide libera tempo para os atendentes se concentrarem em tarefas mais complexas.
                            </Typography>
                        </div>
                        <div className="flex flex-col items-center">
                            <Typography variant="h5" className="mb-2">
                                Gera relatórios detalhados
                            </Typography>
                            <Typography variant="h3" className="text-gray-500 text-center">
                                A CoGuide fornece insights valiosos sobre a performance do atendimento.
                            </Typography>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="w-full max-w-screen-lg">
                <Card className="bg-white p-8 shadow-md">
                    <Typography variant="h1" className="mb-8 text-center text-black">
                        Benefícios da CoGuide
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="bg-gray-100 p-4">
                            <Typography variant="h5" className="mb-2">
                                Aumento da satisfação do cliente
                            </Typography>
                            <Typography variant="body-2" className="mt-4">
                                Com respostas instantâneas e precisas, a CoGuide garante uma experiência de atendimento impecável.
                            </Typography>
                        </Card>
                        <Card className="bg-gray-100 p-4">
                            <Typography variant="h5" className="mb-2">
                                Redução de custos de operação
                            </Typography>
                            <Typography variant="body-2" className="mt-4">
                                A CoGuide automatiza tarefas, liberando tempo da equipe e reduzindo custos com mão de obra.
                            </Typography>
                        </Card>
                        <Card className="bg-gray-100 p-4">
                            <Typography variant="h5" className="mb-2">
                                Insights valiosos sobre clientes
                            </Typography>
                            <Typography variant="body-2" className="mt-4">
                                A CoGuide gera relatórios que ajudam a entender as necessidades e expectativas dos clientes.
                            </Typography>
                        </Card>
                    </div>
                    <div className="flex justify-center mt-8">
                        <a href="/chat">
                        <Button variant="gradient" size="lg" className="w-full md:w-auto" ripple="light">
                            Experimente a CoGuide
                        </Button>
                        </a>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default CoGuide;
