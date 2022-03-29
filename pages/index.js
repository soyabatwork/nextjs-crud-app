import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/layout/Modal";
import { deletePost, fetchPosts } from "../rtk/postsSlice";
export default function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const [editing, setEditing] = React.useState(false);

  const [editPost, setEditPost] = React.useState(null);

  const handleEdit = (post) => {
    setEditing(true);
    setEditPost(post);
  };

  return (
    <div>
      {editing && <Modal {...editPost} onUpdate={setEditing} />}
      <div style={{ marginInline: "1rem" }}>
        {posts.map((post) => {
          return (
            <div
              key={post.id}
              style={{ padding: "2rem", border: "1px solid #333" }}
            >
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <button onClick={() => handleEdit(post)}>Edit</button>
              <button
                onClick={() => dispatch(deletePost(post.id))}
                style={{ marginLeft: ".1rem" }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
