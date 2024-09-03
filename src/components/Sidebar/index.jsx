import React, { useEffect, useState } from "react";
import brandDark from "/src/assets/brand.png";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../../contexts/authContext";

export function Sidebar({ onSelectChat, onNewChat }) {
  const { user, token } = useAuth();
  const [chats, setChats] = useState([]);

  const getChatsByUserId = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3000/chat/user/${userId}`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Inclui o token no cabeçalho da requisição
        },
      });

      
      if (!response.ok) {
        console.error("Erro ao recuperar chats:", response.statusText);
        return [];
      }
      const data = await response.json();
      return data;

    } catch (error) {
      console.error("Erro ao recuperar chats:", error);
      return [];
    }
  };

  useEffect(() => {
    if (user) {
      const fetchChats = async () => {
        const chatsData = await getChatsByUserId(user.id);
        setChats(chatsData);
      };

      fetchChats();
    }
  }, [user, token]);

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="flex items-center">
        <a className="flex" href="/">
          <img
            src={brandDark}
            alt="brand"
            className="h-10 w-10 object-contain"
          />
          <Typography variant="h5" color="blue-gray" className="ml-2">
            CoGuide
          </Typography>
        </a>
      </div>

      <List className="overflow-y-auto h-[calc(100vh-10rem)]">
        <ListItem onClick={() => onNewChat()} className="cursor-pointer" key="new-chat">
          <ListItemPrefix>
            <PlusCircleIcon className="h-8 w-8" />
          </ListItemPrefix>
          <span className="text-blue-gray-900 ml-2">New Chat</span>
        </ListItem>
        <Typography variant="h5" color="blue-gray" className="mt-4">
          Recente
        </Typography>
        {chats.map((chat) => (
          <ListItem
            key={chat._id}
            onClick={() => onSelectChat(chat._id)}
            className="cursor-pointer mt-2"
          >
            <span className="text-blue-gray-900">{chat.title}</span>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

