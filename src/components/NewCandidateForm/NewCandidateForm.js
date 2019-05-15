import React from 'react';
import classes from './NewCandidate.module.css';

const newCandidate = (props) => {

    let form = null
    if (props.showForm) {
        form = <div className={classes.newCandidate}>
            show form with fields to fill for adding new candidate
            </div>
    }


    return (form)
}

export default newCandidate