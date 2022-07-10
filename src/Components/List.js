import "./TodoList.css";
//{}, extracts properties off the props object as variables and functions
function List({taskList, completedTask, deleteTask}) {
    // console.log(props, "props")
    // let taskList = props.taskList;
    // let completedTask = props.completedTask;
    // let deleteTask = props.deleteTask;
  return (
    <>
      <div className="listContainer">
        {taskList !== [] ? (
          <ul>
            {taskList.map((t) => (
              <li
                key={t.id}
                className={t.isCompleted ? "holdText" : "listItem"}
              >
                {t.value}

                <div className="listBtn">
                  <button
                    className="completedBtn"
                    onClick={(e) => completedTask(e, t.id)}
                  >
                    Completed
                  </button>
                  <button
                    className="deleteBtn"
                    onClick={(e) => deleteTask(e, t.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
}

export default List;