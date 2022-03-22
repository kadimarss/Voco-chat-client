import React, {useState} from "react";
import '../App.css';
import data from '../data.json';
import Card from "./Card";

function Chat() {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');


        useEffect(() => {
            setMessages(data);
        }, []);
    const submitMessage = () => {
        setMessages([...text, {
            text,
            user: author,
            date: new Date().toISOString(),
        }]);
        setMessage('');
    };

    return (
        <>
        <div className="Chat">
            <h3>KHK</h3>

            <div className="chat_container">
                {data.map((cardItem) => {
                    console.log(cardItem)
                    return(
                        <Card key={cardItem.id} user={cardItem.username} text={cardItem.text} date={cardItem.date} counter={cardItem.counter} />
                    )
                })}



            <form className="uks">
                <input className="guest" type="text"
                       onChange={(event) => {
                           setText(event.target.value);
                       }} />

                <input className="message" type="text"
                       onChange={(event) => {
                           setAuthor(event.target.value);
                       }} />
            </form>
            <div className="btn"><button
                type="submit"
                onClick={() => {
                    submitMessage();
                }}
            >SEND

            </button></div>
            </div>
            </div>



        </>
    );


}
export default Chat;