import { useState } from "react"; 'react'
function Todo(props) {
  const [modalIsOpen, setModelIsOpen] = useState(false);

  function deleteHandler() {
   
  }

  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn"
          onClick={deleteHandler}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Todo;