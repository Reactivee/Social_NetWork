import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import "./Dialogs.css";
import Messages from "./Message/Message";

const Dialogs = (props) => {

  const dialogsData = props.state.dialogs.map((item) => (
    <DialogItem name={item.name} id={item.id} />
  ));
  const messageData = props.state.messages.map((item) => (
    <Messages message={item.message} />
  ));

  return (
    <div className="dialogs">
      <div className="dialogs-items">{dialogsData}</div>
      <div className="messages">{messageData}</div>
      <div className="messages">{messageData}</div>
    </div>
  );
};

export default Dialogs;
