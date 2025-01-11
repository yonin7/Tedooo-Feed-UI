import React, { useState, useRef, useCallback } from "react";
import FeedItem from "./FeedItem.tsx";
import "../styles/Feed.css";
import FeedFetch from "../hooks/feedFetch.tsx";

const Feed: React.FC = () => {
  const [page, setPage] = useState(0);
  const { loading, feedItems, hasMore } = FeedFetch(page);
  const observer = useRef();

  const lastElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="feed-container">
      {[...feedItems].map((item, i) => {
        const isLastElement = [...feedItems].length === i + 1;
        return isLastElement ? (
          <div className="feed-item" key={i} ref={lastElement}>
            <FeedItem key={item.id} item={item} />
          </div>
        ) : (
          <div className="feed-item" key={i}>
            <FeedItem key={item.id} item={item} />
          </div>
        );
      })}
      {!hasMore && <h4>No more items to load</h4>}
    </div>
  );
};

export default Feed;
