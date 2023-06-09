import React, {FC, useEffect, useRef, useState} from 'react';
import {Player} from "../models/Player";
import {type} from "os";
import {Colors} from "../models/Colors";

interface TimerProps {
    currentPlayer: Player | null;
    restart: () => void;
}

const Timer:FC<TimerProps> = ({currentPlayer, restart}) => {

    const [whiteTime, setWhiteTime] = useState(300);
    const [blackTime, setBlackTime] = useState(300);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)

    useEffect(() => {
        startTime()
    }, [currentPlayer])

    function startTime() {
        if(timer.current) {
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
        timer.current = setInterval(callback, 1000)
    }

    function decrementBlackTimer() {
        setBlackTime(prev => prev-1)
    }

    function decrementWhiteTimer() {
        setWhiteTime(prev => prev-1)
    }

    const handleRestart = () => {
        setWhiteTime(300)
        setBlackTime(300)
        restart()
    }

    return (
        <div style={{marginRight: 10}}>
            <h2>Black - {blackTime}</h2>
            <h2>White - {whiteTime}</h2>
            <div style={{marginTop: 10}}>
                <button className={'restart_button'} onClick={handleRestart}>Restart game</button>
            </div>
        </div>
    );
};

export default Timer;
