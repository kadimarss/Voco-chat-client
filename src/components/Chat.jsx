import React from "react";
import '../App.css';
import data from '../data.json';
import Card from "./Card";
function Chat() {
    return (
        <div className="Chat">
            <h3>KHK</h3>

            <div className="chat_container">
                {data.map(cardItem) => {
                    return(
                        <Card key={cardItem.id} user={cardItem.username} text={carsItem.text} date={cardItem.date} counter={cardItem.counter} />
                    )
                })}

            </div>
        </div>
    );
}
export default Chat;