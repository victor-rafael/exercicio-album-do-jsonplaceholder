import { useEffect, useState } from "react";
import { api } from "../api";
import { Post } from "../types/Post";
import { Link } from "react-router-dom";


export const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPosts();
  }, []);


  const loadPosts = async () => {
    setLoading(true);
    let json = await api.getAllPosts();
    setLoading(false);
    setPosts(json);
  }

  return (
    <div>
      {loading &&
        <div>Carregando...</div>
      }

      {!loading &&
        <div>
          {posts.map((post, index) => (
              <div key={index}>
                <Link to={`/album/${post.id}`}>
                  <div className="postItem">
                    {post.title}
                  </div>
                </Link> 
              </div>
            ))}
        </div>
      }

    </div>
  );
}