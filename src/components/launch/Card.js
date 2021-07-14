import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

import classes from './Cards.module.css';


function Card(props) {
    const [ modalIsOpen, setModalIsOpen] = useState(false);


    function runHandler() {
        console.log("Clicked");
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        console.log("Clicked");
        setModalIsOpen(false);
    }


    return (
        <div className={classes.card}>
            <h2>{props.title}</h2>
            <div className={classes.actions}>
                <button className='btn' onClick={runHandler}>Run</button>
            </div>

             { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
             { modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
        </div>
    );
}

export default Card;