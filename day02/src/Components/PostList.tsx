import { useEffect, useState } from "react";
import axios from "axios";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [limit, setLimit] = useState<number>(5);

  useEffect(() => {
    const getPosts = async () => {
      // await zorgt dat de code hier wacht tot er een resultaat is
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      setPosts(response.data);
    };
    getPosts();
  }, [limit]);

  return (
    <div>
      <h3>Posts:</h3>
      <p>Currently showing: {limit} posts</p>
      <button
        onClick={(e) => {
          setLimit(limit + 5);
        }}
      >
        Load 5 more posts
      </button>
      {posts.slice(limit - 5, posts.length).map((post) => {
        return (
          <>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </>
        );
      })}
    </div>
  );
};

export default PostList;
