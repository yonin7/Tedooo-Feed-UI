import React from "react";
import "../styles/LikesStatus.css";
import likesPic from "../assets/images/like.png";

interface LikeButtonProps {
  likes: number;
  likesPic: HTMLImageElement;
}

const LikeButton: React.FC<LikeButtonProps> = ({ likes }) => (
  <div className="likes-status">
    <img src={likesPic} alt="likes-status" />
    <p>{likes} Likes</p>
  </div>
);

export default LikeButton;
