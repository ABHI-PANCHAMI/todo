
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';

function TodoItem({ item, onDelete, onComplete }) {
  return (
    <div className="todo-list-item">
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        {item.completedOn && <p><i>Completed at: {item.completedOn}</i></p>}
      </div>
      <div>
        <AiOutlineDelete
          title="Delete?"
          className="icon"
          onClick={onDelete}
        />
        {!item.completedOn && (
          <BsCheckLg
            title="Completed?"
            className="check-icon"
            onClick={onComplete}
          />
        )}
      </div>
    </div>
  );
}

export default TodoItem;
