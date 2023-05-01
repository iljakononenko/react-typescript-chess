import React, {useEffect, useState} from 'react';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";
import {Player} from "./models/Player";
import {Colors} from "./models/Colors";
import LostFigures from "./components/LostFigures";
import Timer from "./components/Timer";

function App() {

    const [board, setBoard] = useState(new Board())
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

    function restart() {
        const newBoard = new Board();
        setBoard(newBoard)
        setCurrentPlayer(whitePlayer)
    }

    useEffect(() => {
        setCurrentPlayer(whitePlayer)
    }, [])

    function swapPlayer() {
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
    }

  return (
    <div className="app">
        <Timer restart={restart} currentPlayer={currentPlayer} />
        <BoardComponent board={board} setBoard={setBoard} currentPlayer={currentPlayer} swapPlayer={swapPlayer} />
        <div>
            <LostFigures
                title={"Black figures"}
                figures={board.lostBlackFigures}
            />
            <LostFigures
                title={"White figures"}
                figures={board.lostWhiteFigures}
            />
        </div>
    </div>
  );
}

export default App;
