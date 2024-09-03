import { useEffect, useState, useRef } from "react";
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
import { useAuth } from "../../contexts/authContext";

import userAvatar from "../../assets/user.jpg";
import coGuideAvatar from "../../assets/brand.png";

export function Chat({ chatId, setChatId  }) {
  const { token } = useAuth();
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null);

  // Fetch existing messages or create a new chat
  useEffect(() => {
    if (chatId) {
      const fetchInitialMessages = async () => {
        try {
          const response = await fetch(`http://localhost:3000/chat/${chatId}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          setMessages(data.messages || []);
        } catch (error) {
          console.error("Failed to fetch messages", error);
        }
      };

      fetchInitialMessages();
    } else {
      setMessages([]); // Resetar as mensagens se for um novo chat
    }
  }, [chatId, token]);

  const handleSendMessage = async () => {
    const newMessage = {
      prompt: messageText,
    };

    try {
      const response = await fetch(
        `http://localhost:3000/chat/send/${chatId || ""}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(newMessage),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!chatId) {
        setChatId(data._id);
      }

      await fetchMessages();
      setMessageText("");
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };

  const fetchMessages = async () => {
    if (!chatId) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/chat/${chatId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessages(data.messages || []);
    } catch (error) {
      console.error("Failed to fetch messages", error);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Card className="h-[calc(100vh-2rem)] w-[calc(180vh-2rem)] flex flex-col p-4 shadow-xl shadow-blue-gray-900/5 ml-2 touch-none">
      <List ref={chatContainerRef} className="flex-grow overflow-y-auto">
        {messages
          .filter((message) => message.role !== "system")
          .map((message, index) => (
            <ListItem
              className="outline outline-2 outline-offset-2 mt-2 p-2"
              key={index}
            >
              <Avatar
                src={message.role === "user" ? userAvatar : coGuideAvatar}
                alt={message.role === "user" ? "User" : "CoGuide"}
                className="mr-5"
              />
              <div>
                <Typography variant="h5" color="blue-gray">
                  {message.role === "user" ? "User" : "CoGuide"}
                </Typography>
                <Typography>{message.content || "No content"}</Typography>
              </div>
            </ListItem>
          ))}
      </List>
      <div className="flex items-center justify-end p-2">
        <Textarea
          variant="outlined"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSendMessage();
            }
          }}
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
