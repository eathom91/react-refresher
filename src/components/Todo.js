import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
function Todo(props) {
  const [modalIsOpen, setModelIsOpen] = useState(false);

  function openModalHandler() {
    setModelIsOpen(true);
  }

  function closeModalHandler() {
    setModelIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={openModalHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onConfirm={closeModalHandler} onCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
