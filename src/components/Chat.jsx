import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/message/actions-messages";

const Chat = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const sms = useSelector((store) => store.messages);

  return (
    <div className="chat">
      <div className="chat_messages">
        {sms &&
          sms.map((s) => {
            return (
              <div key={s.date} className="sms">
                {s.message}
                <div className="datenow">{s.date}</div>
              </div>
            );
          })}
      </div>
      <div className="chat_input_form">
        <div className="chat_input">
          <input
            onKeyPress={(e)=>{
              if (e.code === 'Enter' && message !== "") {
                dispatch(addMessage(message));
                setMessage("");
              }
            }}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <span
            className="chat_input_icon"
            onClick={() => {
              if (message !== "") {
                dispatch(addMessage(message));
                setMessage("");
              }
            }}
          >
            <img src={require("./IconS.png")} alt="imade123" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chat;
