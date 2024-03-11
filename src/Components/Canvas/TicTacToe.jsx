


import React, { useState, useEffect } from "react";
import AddModWind from "./AddModWind";
import "./TicTacToe.css";

const TicTacToe = () => {
    const [count, setCount] = useState(0);
    const [cells, setCells] = useState(Array(16).fill(""));
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [gameEnded, setGameEnded] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalValues, setModalValues] = useState({});
    const [animationOut, setAnimationOut] = useState(false);

    useEffect(() => {
        if (showModal) {
            const timeout = setTimeout(() => {
                handleCloseModal();
            }, 400000);
            return () => clearTimeout(timeout);
        }
    }, [showModal]);

    const initializeGame = () => {
        setCount(0);
        setCells(Array(16).fill(""));
        setCurrentPlayer("X");
        setGameEnded(false);
    };

    const isWin = (cells, currentPlayer) => {
        let combs = [
            [3, 7, 11, 15],
            [12, 13, 14, 15],
            [4, 5, 6, 7],
            [8, 9, 10, 11],
            [0, 1, 2, 3],
            [0, 4, 8, 12],
            [1, 5, 9, 13],
            [2, 6, 10, 14]
        ];

        for (var comb of combs) {
            if (
                cells[comb[0]] === currentPlayer &&
                cells[comb[1]] === currentPlayer &&
                cells[comb[2]] === currentPlayer &&
                cells[comb[3]] === currentPlayer
            ) {
                return true;
            }
        }
        return false;
    };

    const tap = (index) => {
        if (cells[index] || gameEnded) return;

        const newCells = [...cells];
        newCells[index] = currentPlayer;

        setCells(newCells);
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
        setCount(count + 1);

        if (isWin(newCells, currentPlayer) || count === 15) {
            setGameEnded(true);
            setShowModal(true);
            setModalValues({ winner: isWin(newCells, currentPlayer) ? currentPlayer : "Draw" });
        }
    };

    const handleCloseModal = () => {
        setAnimationOut(true);
        setTimeout(() => {
            setShowModal(false);
            setModalValues({});
            setAnimationOut(false);
            initializeGame();
        }, 300);
    };

    return (
        <>
            <div>
                {/* Рендеринг игры */}
                <section id="players">
                    <div id="player1" className="player 1">
                        <button className="restart-btn" onClick={initializeGame}>Restart Game</button>
                    </div>
                </section>
                <section id="table-section">
                    <div className="line horizontal line1"></div>
                    <div className="line horizontal line2"></div>
                    <div className="line horizontal line3"></div>
                    <div className="line vertical line4"></div>
                    <div className="line vertical line5"></div>
                    <div className="line vertical line6"></div>
                    <div id="boxes" className="boxes">
                        <div className="row">
                            <div className="tile" onClick={() => tap(0)}>{cells[0]}</div>
                            <div className="tile" onClick={() => tap(1)}>{cells[1]}</div>
                            <div className="tile" onClick={() => tap(2)}>{cells[2]}</div>
                            <div className="tile" onClick={() => tap(3)}>{cells[3]}</div>
                        </div>
                        <div className="row">
                            <div className="tile" onClick={() => tap(4)}>{cells[4]}</div>
                            <div className="tile" onClick={() => tap(5)}>{cells[5]}</div>
                            <div className="tile" onClick={() => tap(6)}>{cells[6]}</div>
                            <div className="tile" onClick={() => tap(7)}>{cells[7]}</div>
                        </div>
                        <div className="row">
                            <div className="tile" onClick={() => tap(8)}>{cells[8]}</div>
                            <div className="tile" onClick={() => tap(9)}>{cells[9]}</div>
                            <div className="tile" onClick={() => tap(10)}>{cells[10]}</div>
                            <div className="tile" onClick={() => tap(11)}>{cells[11]}</div>
                        </div>
                        <div className="row">
                            <div className="tile" onClick={() => tap(12)}>{cells[12]}</div>
                            <div className="tile" onClick={() => tap(13)}>{cells[13]}</div>
                            <div className="tile" onClick={() => tap(14)}>{cells[14]}</div>
                            <div className="tile" onClick={() => tap(15)}>{cells[15]}</div>
                        </div>
                    </div>
                </section>
                <section id="players">
                    <div id="player1" className="player 1">Player 1</div>
                    <div id="player2" className="player 2">Player 2</div>
                </section>
            </div>
            <AddModWind
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                modalValues={modalValues}
                animationOut={animationOut}
            />
        </>
    );
};

export default TicTacToe;
