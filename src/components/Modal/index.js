import React from 'react';
import { removeHyphensAndCapitalize } from "../../utils/helpers";

const Modal = ({ onClose, currentProject }) => {
  const { name, description, folder, index  } = currentProject;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img src={require(`../../assets/img/${folder}/${index}.jpg`)} alt={removeHyphensAndCapitalize(name)} />
        <p>
          {description}
        </p>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
