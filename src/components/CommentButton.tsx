import React from "react";
import "../styles/CommentButton.css";
import commentBtnPic from "../assets/images/commentBtn.svg";

const CommentButton: React.FC<void> = () => (
  <button className="comment-button">
    <img src={commentBtnPic} alt="comment-button" />
  </button>
);

export default CommentButton;
