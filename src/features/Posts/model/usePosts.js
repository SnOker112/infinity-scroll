import { useState, useEffect } from "react";
import { fetchPosts } from "../api/fetchPosts";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const newPosts = await fetchPosts(page);
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, [page]);

  const loadMore = () => setPage((prevPage) => prevPage + 1);
  return { posts, loading, error, loadMore };
};
