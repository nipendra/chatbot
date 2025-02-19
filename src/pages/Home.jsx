import React, { useContext } from 'react'
import { RiImageAiFill } from "react-icons/ri";
import { LuImagePlus } from "react-icons/lu";
import { RiChatAiFill } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { FaArrowUpLong } from "react-icons/fa6";

import '../App.css';
import { dataContext, user, prevUser } from '../context/UserContext';
import Chat from './Chat';
import { generateResponse } from '../gemini';

function Home() {
    let { startRes, setStartRes, popUp, setPopUp, input, setInput, feature, setFeature, showResult, setShowResult } = useContext(dataContext);
    async function handleSubmit(e) {
        if (!input) {
            return;
        }
        e.preventDefault();
        setStartRes(true);
        prevUser.data = user.data;
        prevUser.mime_type = user.mime_type;
        prevUser.imgUrl = user.imgUrl;
        prevUser.prompt = input;
        setInput('');
        const result = await generateResponse();
        setShowResult(result);
        user.data = null;
        user.mime_type = null;
        user.imgUrl = null;
    }

    const handleImage = (e) => {
        setFeature('upimg');
        const file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = (event) => {
            let base64 = event.target.result.split(',')[1];
            user.data = base64;
            user.mime_type = file.type;
            user.imgUrl = `data:${file.type};base64,${base64}`;
        }
        reader.readAsDataURL(file);
    }

    return (
        <div className='home'>
            <nav>
                <div className='logo'>
                    Smart AI Bot
                </div>
            </nav>
            <input type='file' accept="image/*" hidden id='inputImg' onChange={handleImage} />

            {startRes ?
                <Chat /> :
                <div className='hero'>
                    <span id='tag'>What can i help with ?</span>
                    <div className="cat">
                        <div className="upImg" onClick={() => {
                            document.getElementById('inputImg').click();
                        }}>
                            <LuImagePlus />
                            <span>Upload Image</span>
                        </div>
                        <div className="genImg" onClick={() => setFeature('genImg')}>
                            <RiImageAiFill />
                            <span>Generate Image</span>
                        </div>
                        <div className="chat" onClick={() => setFeature('chat')}>
                            <RiChatAiFill />
                            <span>Chat with Botjj</span>
                        </div>
                    </div>
                </div>
            }
            <form className="input-box" onSubmit={(e) => handleSubmit(e)}>
                {popUp &&
                    <div className="pop-up">
                        <div className="select-up" onClick={() => {
                            document.getElementById('inputImg').click();
                        }}>
                            <LuImagePlus />
                            <span>Upload Image</span>
                        </div>
                        <div className="select-gen" onClick={() => setFeature('genImg')}>
                            <RiImageAiFill />
                            <span>Generate Image</span>
                        </div>
                    </div>
                }
                <div id="add" onClick={() => setPopUp((prev) => !prev)}>
                    {feature === "genImg" ? <RiImageAiFill id='genImg' /> : <FiPlus />}
                </div>
                <input type="text" placeholder="Ask something..." className="" onChange={(e) => setInput(e.target.value)} value={input} />
                {input ? <button id="submit"><FaArrowUpLong /></button> : null}
            </form>
        </div>

    )
}

export default Home
