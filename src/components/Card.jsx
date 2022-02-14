import React from "react";
import '../App.css';

export interface ChatCardProps{
    user:string;
    text: string;
    date:string;
    counter:string;
}

function Card() {
    return (
        <div className="Card">
            <div className="card_container">
                <div className="text">{text}</div>
                        <div className="user">{user}</div>
                        <div className='card_date'>{date}</div>
                        <div className="wordCounter"> {counter}</div>

            </div>
        </div>
    );
}

export default Card;