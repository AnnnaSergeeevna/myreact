import React from "react";
import { Modal, Button } from 'react-bootstrap';
import "./TicTacToe.css";

const AddModWind = ({
  showModal,
  handleCloseModal,
  modalValues,
  animationOut
}) => {
  return (
    <div>
      <Modal className="modal-container"
        show={showModal}
        onHide={handleCloseModal}
      >
        <Modal.Dialog>

          <Modal.Body>
            {Object.keys(modalValues).length !== 0 && (
              <>
                <h3>{modalValues.winner === "Draw" ? "Draw" : `Winner is ${modalValues.winner}`}</h3>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
};

export default AddModWind;
