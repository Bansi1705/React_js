import React, { useState } from "react";
export const Form = ({ getFormData }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [color, setColor] = useState("#cb7b7b");
  // useState() :
  // Lets you add and manage data inside a component

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const descChangeHandler = (e) => {
    setDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title,
      desc,
      color,
    };
    getFormData(data);
    console.log("form submited", data);
    setColor("#cb7b7b");
    setDesc("");
    setTitle("");
  };

  return (
    <div className="form">
      <h1>Create Note</h1>
      <form onSubmit={handleSubmit}>
        <label>Note Title</label>
        <p></p>
        <input
          name="title"
          type="text"
          id="title"
          value={title}
          onChange={titleChangeHandler}
          placeholder="Enter Title....."
        />
        <br />
        <label>Note Description</label>
        <p></p>
        <textarea
          name="desc"
          id="title"
          cols="20"
          rows="10"
          value={desc}
          onChange={descChangeHandler}
          placeholder="Enter Title..."
        ></textarea>
        <br/>
        <label htmlFor="">Note Color</label><br/>
        <input
          type="color"
          id="color"
          name="color"
          value={color}
          defaultValue={color}
          onChange={(e)=> setColor(e.target.value)}
        /><br/>
        <button>submit</button>
      </form>
    </div>
  );
};
