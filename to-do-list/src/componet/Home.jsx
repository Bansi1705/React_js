import "./Home.css";
import ModeContext from "../context/Mode_context";
import { useContext, useEffect, useState } from "react";
import { Form } from "./Form";
import Box from "./Box";

const getLocalTasks = () => {
  const tasks = localStorage.getItem("data");
  return tasks ? JSON.parse(tasks) : [];
};

export const Home = () => {
  const { isDarkMode } = useContext(ModeContext);

  const [allData, setAllData] = useState(getLocalTasks);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ title: "" });
  const [loading, setLoading] = useState(false);

  const getFormData = async (noteData) => {
    setLoading(true);

    try {
      // tiny async gap so spinner renders
      await new Promise((resolve) => setTimeout(resolve, 100));

      if (editId !== null) {
        // UPDATE TASK
        const updated = allData.map((item) =>
          item.id === editId ? { ...item, title: noteData.title } : item
        );
        setAllData(updated);
        setEditId(null);
      } else {
        // ADD NEW TASK
        const newItem = {
          id: Math.random().toString(),
          title: noteData.title,
        };
        setAllData((prev) => [...prev, newItem]);
      }

      setFormData({ title: "" });
    } catch (error) {
      console.error("Error while adding/updating task:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(allData));
  }, [allData]);

  const deleteHandler = (id) => {
    const filter = allData.filter((task) => task.id !== id);
    setAllData(filter);
  };

  const editHandler = (id) => {
    const found = allData.find((task) => task.id === id);
    if (found) {
      setEditId(id);
      setFormData({ title: found.title });
    }
  };

  return (
    <div className={`${!isDarkMode ? "toDo-dark" : "toDo-light"}`}>
      <div className={`${!isDarkMode ? "homeToDo-dark" : "homeToDo-light"}`}>
        <div className={`${!isDarkMode ? "page-title-dark" : "page-title-light"}`}>
          My Todos ✅
        </div>

        {/* Spinner directly above the Form */}
        {loading && (
          <div className="spinner">
            <div className="loader"></div>
          </div>
        )}

        <Form
          getFormData={getFormData}
          formData={formData}
          editId={editId}
        />

        <div className="box-container">
          <Box
            taskList={allData}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
          />
        </div>
      </div>
    </div>
  );
};
