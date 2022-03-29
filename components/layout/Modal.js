import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { editPost } from "../../rtk/postsSlice";

const Modal = (props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  React.useEffect(() => {
    if (props.title && props.content) {
      setTitle(props.title);
      setContent(props.content);
    }
  }, []);

  const handleUpdate = () => {
    dispatch(editPost({ id: props.id, title, content }));
    props.onUpdate(false);
  };

  return (
    <motion.div
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      style={{
        background: "#f5f5f5",
        position: "fixed",
        padding: "1rem",
        border: "1px solid #333",
        top: "50%",
        marginInline: "10rem",
      }}
    >
      <label>Title</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />
      <label>Content</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        type="text"
      />
      <button onClick={handleUpdate}>update</button>
    </motion.div>
  );
};

export default Modal;
