import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineDoneOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Box({ editHandler, taskList, deleteHandler }) {
  const navigate = useNavigate();

  return (
    <>
      {taskList.length === 0 ? (
        <h2>No Tasks Added</h2>
      ) : (
        taskList.map((task) => (
          <div className="todo-box" key={task.id}>
            <h2 className="todo-title">{task.title}</h2>

            <div className="todo-actions">
              <button className="check-btn">
                <MdOutlineDoneOutline size={22} />
              </button>

              <button className="edit-btn" onClick={() => editHandler(task.id)}>
                <CiEdit size={22} />
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteHandler(task.id)}
              >
                <MdDelete size={22} />
              </button>

              <button
                className="forward-btn"
                onClick={() => navigate(`/tododetail/${task.id}`)}
              >
                <FaArrowRight size={22} />
              </button>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default Box;
