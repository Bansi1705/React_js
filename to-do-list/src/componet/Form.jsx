import React, {  useEffect, useState } from "react";
import "./Form.css"
export const Form = ({ getFormData, formData, editId }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) return;
    getFormData({ title });
    setTitle("");
  };

  useEffect(() => {
    if (editId !== null && formData?.title) {
      setTitle(formData.title);
    }
  }, [editId, formData]);

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input
          className="inputFeild"
          type="text"
          placeholder="Enter Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">{editId !== null ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};
