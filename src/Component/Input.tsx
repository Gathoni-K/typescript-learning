/*
This is our component holding the input button and the add button

*/

import styles from './Input.module.css';
import { useState } from 'react';

interface InputProps {
    onAddAnime : (name: string) => void;
}


const Input = ({ onAddAnime }: InputProps) => {
    const [inputValue, setInputValue] = useState("");
    return (
    <div className={styles.Input}>
        <div className={styles.Header}>
            <h1>Irasshaimase!</h1>
            <h2>What anime are we watching today?</h2>
        </div>
        <div className={styles.inputField}>
            <input type="text" className={styles.input} placeholder="Enter anime name" value={inputValue} onChange={(e) =>setInputValue(e.target.value)} />
            <button type="button" className={styles.addButton} onClick={() => {onAddAnime(inputValue); setInputValue("")}}>Add</button>
            {/* 
            generally, if it is an event handler and one needs to call a function, always resort to using arrow functions.
            The arrow function declared here will have no parameters.
             */}
        </div>
    </div>
    )
}

export default Input
