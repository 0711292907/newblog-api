import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    descr: "",
    cover: "",
    user_name: "",
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/books/${bookId}`, book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Update Post</h1>
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
        placeholder="COVER PICTURE"
        name="cover"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="USER_NAME"
        name="user_name"
        onChange={handleChange}
      />
      <button className="formBotton"  onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/">See All Posts</Link>
    </div>
  );
};
export default Update;  


