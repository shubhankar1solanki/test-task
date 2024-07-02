import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import {ChatWindow} from "@/components/ChatWindow";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const ChatApp = () => {
    return (  <div className="h-screen flex flex-col flex-1  bg-white w-full">
        <Header />
        <ChatWindow />
        <Footer />
   </div>)
}
export default ChatApp;