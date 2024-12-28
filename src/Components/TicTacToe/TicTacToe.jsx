import React, { useRef } from 'react'
import './TicTacToeCss.css';
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'
import { useState } from 'react';


let data = ["", "", "", "", "", "", "", "", ""];

export const TicTacToe = () => {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);

    const toggel = (ele, num) => {
        if (lock) {
            return 0;
        }
        if (count % 2 == 0) {
            ele.target.innerHTML = `<img src="${cross_icon}">`
            data[num] = "X";
            setCount(++count);
        }
        else {
            ele.target.innerHTML = `<img src="${circle_icon}">`
            data[num] = "O";
            setCount(++count);
        }
        checkWin();
    }


    const checkWin = () => {
        //Horizontal winning condition
        if (data[0] === data[1] && data[1] === data[2] && data[2] != "") {
            won(data[2])
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[5] != "") {
            won(data[5])
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8] != "") {
            won(data[8])
        }
        //Vertical winning condition
        else if (data[0] === data[3] && data[3] === data[6] && data[6] != "") {
            won(data[6])
        }
        else if (data[1] === data[4] && data[4] === data[7] && data[7] != "") {
            won(data[7])
        }
        else if (data[2] === data[5] && data[5] === data[8] && data[8] != "") {
            won(data[8])
        }
        //Diagonal winning condition
        else if (data[0] === data[4] && data[4] === data[8] && data[8] != "") {
            won(data[8])
        }
        else if (data[2] === data[4] && data[4] === data[6] && data[6] != "") {
            won(data[6])
        }
        //Draw condition
        else if (count === 9) { // Check if all moves are played
            alert("It's a draw!");
            setLock(true);
        }
    }

    const won = (winner) => {
        // alert(`${winner} won the game!`);
        setLock(true);
        if (winner === "X") {
            titleRef.current.innerHTML = `Congratulations: <img src="${cross_icon}" alt="X"> wins`;
        } else if (winner === "O") {
            titleRef.current.innerHTML = `Congratulations: <img src="${circle_icon}" alt="O"> wins`;
        }
    }

    const reset = () => {
        setCount(0);
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        titleRef.current.innerHTML = "Tic Tac Toe Game In- <span>React</span>";
        document.querySelectorAll('.boxes').forEach(box => box.innerHTML = "");
    }

    return (
        <div className='container'>
            <h1 className='title' ref={titleRef}>Tic Tac Toe Game In- <span> React</span> </h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" onClick={(e) => { toggel(e, 0) }}></div>
                    <div className="boxes" onClick={(e) => { toggel(e, 1) }}></div>
                    <div className="boxes" onClick={(e) => { toggel(e, 2) }}></div>
                </div>
                <div className="row2">
                    <div className="boxes" onClick={(e) => { toggel(e, 3) }}></div>
                    <div className="boxes" onClick={(e) => { toggel(e, 4) }}></div>
                    <div className="boxes" onClick={(e) => { toggel(e, 5) }}></div>
                </div>
                <div className="row3">
                    <div className="boxes" onClick={(e) => { toggel(e, 6) }}></div>
                    <div className="boxes" onClick={(e) => { toggel(e, 7) }}></div>
                    <div className="boxes" onClick={(e) => { toggel(e, 8) }}></div>
                </div>
            </div>
            <button className="reset" onClick={() => reset()}>Reset</button>
        </div>
    )
}
