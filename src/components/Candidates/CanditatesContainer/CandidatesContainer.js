import React from 'react';

import classes from './CandidatesContainer.module.css'

const candidatesContainer = (props) => (
    <div className={classes.CandidatesContainer}>
        {props.children}
    </div>
);

export default candidatesContainer;