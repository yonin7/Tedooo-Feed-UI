import React from "react";
import "../styles/CommentsStatus.css";

interface LikeButtonProps {
  comments: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ comments }) => (
  <div className="comments-status">
    <p>{comments} Comments</p>
  </div>
);

export default LikeButton;
