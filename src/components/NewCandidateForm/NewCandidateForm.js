import React from 'react';
import classes from './NewCandidate.module.css';

const newCandidate = (props) => {
    let visibility = 'hidden'
    
    if(props.visibility){
        visibility = 'visible'
    }

    return(<div className={classes.newCandidate} style={{ visibility: visibility }}>
        show form with fields to fill for adding new candidate
    </div>)
}

export default newCandidate