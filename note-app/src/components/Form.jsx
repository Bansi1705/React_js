import { useState } from "react";
import { Button } from "./Button";
export const Form = ({ getFormData, btnText }) => {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, desc };
    getFormData(data);
    console.log("Form submited", data);
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
          onChange={handleTitle}
          placeholder="Enter title..."
        />
        <br />
        <label>Note Title</label>
        <br />
        <textarea
          id="desc"
          name="title"
          onChange={handleDesc}
          placeholder="Enter title..."
        ></textarea>
        <br />
        <Button btnText={btnText} />
      </form>
    </div>
  );
};
