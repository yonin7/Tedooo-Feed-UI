import React, { useState, useEffect } from "react";
import { FeedItem as FeedItemType } from "../types/feedTypes";
import LikeButton from "./LikeButton.tsx";
import LikesStatus from "./LikesStatus.tsx";
import CommentsStatus from "./CommentsStatus.tsx";
import CommentButton from "./CommentButton.tsx";
import { sendImpression } from "../services/feedService.ts";
import "../styles/FeedItem.css";

interface FeedItemProps {
  item: FeedItemType;
}

const FeedItem: React.FC<FeedItemProps> = ({ item }) => {
  const [likes, setLikes] = useState(item.likes);
  const [liked, setLiked] = useState(item.didLike);
  console.log(item);

  useEffect(() => {
    sendImpression(item.id);
  }, [item.id]);

  const likedHandler = () => {
    setLikes((prev) => {
      let newLikes = prev;
      !liked ? newLikes++ : newLikes--;
      return newLikes;
    });
    setLiked((prev) => {
      let newLiked = !prev;
      return newLiked;
    });
  };
  return (
    <>
      <div className="feed-header">
        <img src={item.avatar} alt="user" />
        <div className="user-details">
          <h4>{item.username}</h4>
          <p>{item.shopName}</p>
          <span>{item.date}</span>
        </div>
      </div>
      <p className="feed-text">{item.text}</p>
      <div
        className={
          item.images.length > 1 ? "feed-images two-images" : "feed-images"
        }
      >
        {item.images.slice(0, 2).map((src, index) => (
          <img key={index} src={src} alt={`Post  ${index + 1}`} />
        ))}
      </div>
      <div className="feed-footer">
        <div className="feed-status">
          <LikesStatus likes={likes} />
          <CommentsStatus comments={item.comments} />
        </div>
        <div className="feed-buttons">
          <LikeButton liked={liked} onLike={likedHandler} />
          <CommentButton />
        </div>
      </div>
    </>
  );
};

export default FeedItem;
