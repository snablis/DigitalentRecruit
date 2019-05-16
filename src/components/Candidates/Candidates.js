import React from 'react';
import classes from './Candidates.module.css';
import CandidatesContainer from './CanditatesContainer/CandidatesContainer'
import Candidate from './Candidate/Candidate'

const candidates = (props) => (
    <CandidatesContainer>
        <div className={classes.Candidates}>
            {/* <p>map all individual canditates based on the content of the database / mockdata</p> */}
            {/* {console.log(props.data.User.length)} */}
            {props.data.map((user) =>
                <Candidate
                    key={user.phone} 
                    name={user.name} 
                    age={user.age} 
                    email={user.email} 
                    adress={user.adress} 
                    />
            )}
        </div>
    </CandidatesContainer>
)

export default candidates