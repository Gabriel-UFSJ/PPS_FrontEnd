import React, { useState } from 'react';
import {
  Card,
  List,
  ListItem,
  Avatar,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const messages = [
  {
    author: "John Doe",
    avatar: "https://source.unsplash.com/random/1",
    message: "Hi! How can I help you today?",
  },
  {
    author: "You",
    avatar: "https://source.unsplash.com/random/2",
    message: "I'm having trouble setting up my new email.",
  },
  {
    author: "John Doe",
    avatar: "https://source.unsplash.com/random/1",
    message:
      "I understand. Can you tell me which email you're configuring and what problem you're encountering?",
  },
  {
    author: "John Doe",
    avatar: "https://source.unsplash.com/random/1",
    message:
      "I understand. Can you tell me which email you're configuring and what problem you're encountering?",
  },
  {
    author: "John Doe",
    avatar: "https://source.unsplash.com/random/1",
    message:
      "I understand. Can you tell me which email you're configuring and what problem you're encountering?",
  },
  {
    author: "John Doe",
    avatar: "https://source.unsplash.com/random/1",
    message:
      "I understand. Can you tell me which email you're configuring and what problem you're encountering?",
  },
  {
    author: "John Doe",
    avatar: "https://source.unsplash.com/random/1",
    message:
      "I understand. Can you tell me which email you're configuring and what problem you're encountering?",
  },
];

export function Chat() {
  const [messageText, setMessageText] = useState("");

  const handleSendMessage = () => {
    // TODO: Enviar a mensagem para o servidor
    console.log("Enviando mensagem:", messageText);

    // Limpar o campo de texto após o envio
    setMessageText("");
  };

  return (
    <Card className="h-[calc(100vh-2rem)] w-[calc(170vh-2rem)] flex flex-col p-4 shadow-xl shadow-blue-gray-900/5 ml-2">
      <List className="flex-grow overflow-y-auto">
        {messages.map((message, index) => (
          <React.Fragment key={index}>
            <ListItem className={message.author === "Você" ? "text-right" : ""}>
              <Avatar
                src={message.avatar}
                alt={message.author}
                className="mr-2"
              />
              <div>
                <Typography variant="h5" color="blue-gray">
                  {message.author}
                </Typography>
                <Typography>
                  {message.message}
                </Typography>
              </div>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
      <div className="flex items-center justify-end p-2">
        <Textarea
          variant="outlined"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          label="Digite sua mensagem"
          className="w-full mr-2"
        />
        <Button variant="gradient" size="sm" onClick={handleSendMessage}>
          <PaperAirplaneIcon className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}
