import Post from "./Post/Postnumber";

const MyPost = () => (
  <div>
    My posts
    <Post message="Hi how are you" />;
    <Post message="Hello how are you?" />;
    <Post />;
  </div>
);

export default MyPost;
