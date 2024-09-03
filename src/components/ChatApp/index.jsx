import React, { useState } from "react";
import { Chat } from "../Chat";
import { Sidebar } from "../Sidebar";

export function ChatApp() {
  const [chatId, setChatId] = useState(null);

  const handleSelectChat = (id) => {
    setChatId(id);
  };

  const handleNewChat = () => {
    setChatId(null);
  };

  return (
    <div className="flex">
      <Sidebar onSelectChat={handleSelectChat} onNewChat={handleNewChat} />
      <Chat chatId={chatId} setChatId={setChatId} />
    </div>
  );
}
