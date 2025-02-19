import React, { useContext } from 'react'
import { dataContext, prevUser } from '../context/UserContext'

function Chat() {
    const { showResult } = useContext(dataContext);
    return (
        <div className='chatpage'>
            <div className="user">
                <img src={prevUser.imgUrl} alt="" />
                <span>{prevUser.prompt}</span>
            </div>
            <div className="ai">
                <img src="" alt="" />
                <span>{showResult}</span>
            </div>
        </div>
    )
}

export default Chat
