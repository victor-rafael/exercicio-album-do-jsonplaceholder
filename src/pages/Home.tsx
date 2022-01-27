import { useEffect, useState } from "react";
import { api } from "../api";
import { Post } from "../types/Post";
import { ListItem } from "../components/ListItem";


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
                <ListItem id={post.id} title={post.title} />
              </div>
            ))}
        </div>
      }

    </div>
  );
}