import React, { useContext } from 'react'
import { dataContext, prevUser } from '../context/UserContext'

function Chat() {
    const { showResult, prevFeature, imageUrl } = useContext(dataContext);
    return (
        <div className='chatpage'>
            <div className="user">
                {prevFeature == 'upImg' ? <><img src={prevUser.imgUrl} alt="" />
                    <span>{prevUser.prompt}</span></>
                    : <span>{prevUser.prompt}</span>
                }
            </div>
            <div className="ai">

                {prevFeature == 'genImg' ?
                    <>
                        {imageUrl ?
                            <>
                                <img src={imageUrl} alt="" />
                            </> :
                            <span>Generating Image... </span>
                        }
                    </>
                    : <>
                        {showResult ?
                            <span>{showResult}</span>
                            :
                            <span>Loading... </span>
                        }

                    </>
                }

            </div>
        </div >
    )
}

export default Chat
