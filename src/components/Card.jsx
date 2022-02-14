import React from "react";
import '../App.css';


function Card({text, user, date, counter}) {
    return (
        <div className="Card">
            <div className="card_container">
                <div className="text">{text}</div>
                <div className="muu">
                        <div className="user">{user}</div>
                        <div className='card_date'>{date}</div>
                        <div className="word_counter"> {counter}</div>
                </div>

            </div>
        </div>
    );
}

export default Card;