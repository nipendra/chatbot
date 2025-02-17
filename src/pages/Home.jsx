import React from 'react'
import { RiImageAiFill } from "react-icons/ri";
import { LuImagePlus } from "react-icons/lu";
import { RiChatAiFill } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { FaArrowUpLong } from "react-icons/fa6";

import '../App.css';

function Home() {
    return (
        <div className='home'>
            <nav>
                <div className='logo'>
                    Smart AI Bot
                </div>
            </nav>
            <div className='hero'>
                <span id='tag'>What can i help with ?</span>
                <div className="cat">
                    <div className="upImg">
                        <LuImagePlus />
                        <span>Upload Image</span>
                    </div>
                    <div className="genImg">
                        <RiImageAiFill />
                        <span>Generate Image</span>
                    </div>
                    <div className="chat">
                        <RiChatAiFill />
                        <span>Chat with Botjj</span>
                    </div>
                </div>
            </div>

            <form className="input-box">
                <button id="add">
                    <FiPlus />
                </button>
                <input type="text" placeholder="Ask something..." className="" />
                <button id="submit"><FaArrowUpLong /></button>
            </form>
        </div>

    )
}

export default Home
