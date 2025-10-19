import * as React from 'react';
import {io, Socket} from "socket.io-client";
import {ChangeEvent, useCallback, useEffect, useRef, useState} from "react";
import {Input} from "@/components/ui/atom/input";
import {Button} from "@/components/ui/atom/button";
import {Card} from "@/components/ui/atom/card";
import {cn} from "@/lib/utils";
import {ChevronUp} from "lucide-react";
import {ChatMessage} from "shared/src";

const name = `Anon-${Math.floor(Math.random() * 10000)}`

function Chat() {
  const ref = useRef<HTMLDivElement>(null);
  const messagesBottomAnchorRef = useRef<HTMLDivElement>(null!);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [hidden, setHidden] = useState<boolean>(false);
  const socketRef = useRef<Socket>(null);

  useEffect(() => {
    socketRef.current = io('/api');
    socketRef.current.on('chat message', (msg: ChatMessage) => {
      setMessages(prev => [...prev, msg]);
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight - ref.current.clientHeight;
    }
  }, [messages]);

  const sendMessage = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    socketRef.current?.emit('chat message', {name, message: inputMessage});
    setInputMessage("");
  }, [inputMessage]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  }, []);

  const toggle = useCallback(() => {
    setHidden(!hidden);
  }, [hidden]);

  return (
    <Card className={cn("transition-all duration-300 flex flex-col fixed right-0 z-50 border-card gap-4 p-4 mr-14 ml-2 max-w-90", messages.length > 0 ? "translate-y-0 bottom-2" : "translate-y-full bottom-0", hidden && "translate-y-full bottom-10 mr-2")}>
      <div className={"cursor-pointer absolute top-0 right-0 w-full h-10 flex justify-end"} onClick={toggle}>
        <div className={cn("flex justify-center items-center bg-card rounded-sm h-8 px-1")}>
          <ChevronUp size={32} strokeWidth={2} color={"var(--primary)"} className={cn("transition-all ease-in-out duration-500", hidden ? "rotate-0" : "rotate-180")}/>
        </div>
      </div>
      <div ref={ref} className={"flex flex-col gap-2 max-h-100 overflow-scroll"}>
        {messages.map((message, idx) => (
          <div key={idx} className={cn("flex gap-2", message.name === "Steffen" && "rounded-sm bg-primary p-2")}>
            <p className={cn("text-primary", message.name === "Steffen" && "text-primary-foreground")}>{ message.name }</p>
            <p className={cn("text-primary", message.name === "Steffen" && "text-primary-foreground")}>{ message.message }</p>
          </div>
        ))}
        <div ref={messagesBottomAnchorRef}></div>
      </div>
      <form className={"flex gap-4"}
        onSubmit={sendMessage}>
        <Input className={"border-muted-foreground"} name={"message"} type={"text"} id={"message"} onChange={handleChange} value={inputMessage} />
        <Button type="submit">
          Senden
        </Button>
      </form>
    </Card>
  )
}

export default Chat;