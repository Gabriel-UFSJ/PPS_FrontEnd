import React, { useEffect, useState } from 'react';

export function Chat() {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');

    const handleSendMessage = async () => {
        // Enviar a mensagem para o backend e receber a resposta da IA.
        // Atualizar o estado 'messages' com as mensagens antigas e a nova resposta.

    };

    return (
        <div className="chat-page">
            <div className="left-menu">
                <div className="menu-header">
                    <button>New Chat</button>
                </div>
                <div className="menu-content">
                    {/* Lista de histórico de chats */}
                    <ul>
                        <li>Chat 1</li>
                        <li>Chat 2</li>
                        {/* Adicione mais itens conforme necessário */}
                    </ul>
                </div>
                <div className="menu-footer">
                    {/* Informações da conta */}
                </div>
            </div>
            <div className="main-chat">
                <div className="chat-container">
                    {messages.map((message, index) => (
                        <div key={index} className={message.sender === 'user' ? 'user-message' : 'ai-message'}>
                            {message.text}
                        </div>
                    ))}
                </div>
                <form className="input-container" onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}>
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                    />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}

