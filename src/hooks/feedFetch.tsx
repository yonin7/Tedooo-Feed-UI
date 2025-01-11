import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const BASE_URL = "https://backend.tedooo.com/hw/feed.json";

function FeedFetch(page) {
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const [error, setError] = useState(false);
  const [feedItems, setFeedItems] = useState([]);

  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const res = await axios.get(BASE_URL, {
        params: { skip: page * 6 },
      });
      await setFeedItems((prev) => {
        const combined = [...prev, ...res.data.data];
        const uniqueItemsMap = new Map(combined.map((item) => [item.id, item]));
        return Array.from(uniqueItemsMap.values());
      });
      await setHasMore(res.data.hasMore);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [page]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery, page]);

  return { loading, error, feedItems, hasMore };
}

export default FeedFetch;
