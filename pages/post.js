import axios from "axios";

const Post = ({ comments }) => {
  return comments.map(comment => {
    return (
      <div key={comment.id}>
        <h3>{comment.name}</h3>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
      </div>
    );
  });
};

Post.getInitialProps = async ({ query }) => {
  const url = `https://jsonplaceholder.typicode.com/comments?postid=query`;
  const response = await axios.get(url);
  const { data } = response;
  return { comments: data };
};

export default Post;
