import React, { useEffect, useState } from 'react';
import brandDark from '/src/assets/brand.png';

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

import { PlusCircleIcon } from "@heroicons/react/24/solid";

export function Sidebar() {
  const getHistoric = async () => {
    const response = await fetch('/api/chats');
    const historicData = await response.json();

    if (!response.ok) {
      console.error('Erro ao recuperar histórico de chats:', response.statusText);
      return [];
    }

    return historicData;
  };

  const [historic, setHistoric] = useState([]);

  useEffect(() => {
    const fetchHistoric = async () => {
      const historicData = await getHistoric();
      setHistoric(historicData);
    };

    fetchHistoric();
  }, []);

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="flex items-center">
        <a className="flex" href='/'>
          <img src={brandDark} alt="brand" className="h-10 w-10 object-contain" />
          <Typography variant="h5" color="blue-gray" className="ml-2">
            CoGuide
          </Typography>
        </a>
      </div>

      <List>
        <ListItem>
          <ListItemPrefix>
            <PlusCircleIcon className="h-8 w-8" />
          </ListItemPrefix>
          <span className="text-blue-gray-900 ml-2">New Chat</span>
        </ListItem>
        <Typography variant="h5" color="blue-gray" className="mt-4">
          Recente
        </Typography>
        {historic.map((chat) => (
          <ListItem key={chat.id} className="mt-2">
            <span className="text-blue-gray-900">{chat.name}</span>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
