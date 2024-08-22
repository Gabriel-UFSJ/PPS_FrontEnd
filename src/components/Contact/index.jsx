import React from "react";
import {
    Card,
    Input,
    Textarea,
    Button,
    Typography,
} from "@material-tailwind/react";

export function Contact() {
    return (
        <div className="flex justify-center h-screen pt-5">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Contato
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Preencha o formulário para entrar em contato.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Nome Completo
                        </Typography>
                        <Input size="lg" placeholder="Seu Nome" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none" }} />

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Seu Email
                        </Typography>
                        <Input size="lg" placeholder="email@exemplo.com" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none" }} />

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Mensagem
                        </Typography>
                        <Textarea rows={4} placeholder="Sua mensagem..." className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none" }} />
                    </div>

                    <Button className="mt-6" fullWidth>
                        Enviar Mensagem
                    </Button>
                </form>
            </Card>
        </div>
    );
};
