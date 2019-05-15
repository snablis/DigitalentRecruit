import React from 'react';
import classes from './Candidate.module.css';

const candidate = (props) => (
        <div className={classes.candidate}>
            {/* <p>map all individual canditates based on the content of the database / mockdata</p> */}
            {props.name}
            {props.age}
            {props.email}
            {props.address}
            {props.phone}
            {props.stage}
        </div>
)

export default candidate