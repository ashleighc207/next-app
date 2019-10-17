import Navbar from "../components/Navbar.js";
import axios from "axios";
import Link from "next/link";

const Index = ({ posts }) => {
  return (
    <div>
      <Navbar />
      {posts.map(post => {
        return (
          <div key={post.id}>
            <Link href={`/post?id=${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

Index.getInitialProps = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/"
  );
  const { data } = response;
  return { posts: data };
};

export default Index;
