import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../rtk/postsSlice";

const addpost = () => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [error, setError] = React.useState("");

  const router = useRouter();
  const dispatch = useDispatch();
  const showError = (message) => {
    setError(message);
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length > 0 && content.length > 0) {
      dispatch(createPost({ title, content }));
    } else {
      showError("Please enter a title & content");
    }

    router.push("/");
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>create a new post</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: ".5rem",
        }}
      >
        <label htmlFor="">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="">Content</label>
        <textarea
          rows="4"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {error && error}
        <button onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
};

export default addpost;
