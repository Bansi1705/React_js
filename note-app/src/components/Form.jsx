import { useState } from "react";
import { Button } from "./Button";
export const Form = ({ getFormData, btnText }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [color, setColor] = useState("#e8dcdc");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, desc, color };
    getFormData(data);
    console.log("Form submited", data);
    setTitle("");
    setDesc("");
    setColor("#e8dcdc");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create Form</h1>
        <label>Note Title</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitle}
          placeholder="Enter title..."
        />
        <br />
        <label>Note Description</label>
        <br />
        <textarea
          id="title"
          name="desc"
          value={desc}
          onChange={handleDesc}
          placeholder="Enter title..."
        ></textarea>
        <br />
        <label>Note Color</label>
        <br />
        <input
          type="color"
          id="color"
          name="color"
          value={color}
          defaultValue={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <br />
        <Button btnText={btnText} />
      </form>
    </div>
  );
};
