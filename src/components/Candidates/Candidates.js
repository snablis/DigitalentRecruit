import React from 'react';
import classes from './Candidates.module.css';
import CandidatesContainer from './CanditatesContainer/CandidatesContainer'

const candidates = (props) => (
    <CandidatesContainer>
        <div className={classes.Candidates}>
            {/* <p>map all individual canditates based on the content of the database / mockdata</p> */}

        </div>
    </CandidatesContainer>
)

export default candidates