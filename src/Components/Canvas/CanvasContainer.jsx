import React from "react";
import TicTacToe from "./TicTacToe";
import "./TicTacToe.css";


class CanvasContainer extends React.Component {
    render() {
        return (
            <div>
                <TicTacToe />
            </div>
        );
    }
}

export default CanvasContainer;
