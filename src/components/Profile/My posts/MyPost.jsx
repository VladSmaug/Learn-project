import Post from "./Post/Postnumber";

const MyPost = () => (
  <div>
    My posts
    <Post message="Hi how are you" likes="10" />;
    <Post message="Hello how are you?" likes="20" />;
    <Post message="Hi!" likes="21" />;
  </div>
);

export default MyPost;
