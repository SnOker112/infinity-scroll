import React from "react";
import { PostsList } from "../../features/Posts/ui/PostsList";
import { usePosts } from "../../features/Posts/model/usePosts";
import { Button } from "../../shared/ui/Button";

const PostsPage = () => {
  const { posts, loading, error, loadMore } = usePosts();
  return (
    <div>
      <h1>Posts</h1>
      {error && <p>Error:{error}</p>}
      <PostsList posts={posts} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Button onClick={loadMore}>LoadMore</Button>
      )}
    </div>
  );
};

export default PostsPage;
