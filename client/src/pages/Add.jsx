import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    descr: "",
    cover: "",
    user_name: "",
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div className="form">
      <h1>Add New Post</h1>
      <input
        type="text"
        placeholder="POST TITLE"
        name="title"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="POST DESCRIPTION"
        name="descr"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="POST COVER"
        name="cover"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="USER_NAME"
        name="user_name"
        onChange={handleChange}
      />
      <button className="formButton" onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link to="/">See All Posts</Link>
    </div>
  );
};

export default Add;