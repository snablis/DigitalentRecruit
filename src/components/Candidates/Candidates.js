import React from 'react';
import classes from './Candidates.module.css';
import CandidatesContainer from './CanditatesContainer/CandidatesContainer'
import Candidate from './Candidate/Candidate'


const candidates = (props) => {
        return (
            <CandidatesContainer>
                <div className={classes.Candidates}>
                <h1>Current candidates</h1>
                    {/* {console.log(props.data)} */}
                    {/* add filter option to only visualize Candidates with certain search criteria */}
                    {props.User.map((user, index) =>
                        <Candidate // Render alternative if clicked with more information and options
                            key={user.phone}
                            name={user.name}
                            age={user.age}
                            email={user.email}
                            address={user.address}
                            stage={user.stage}
                            phone={user.phone}
                            click={() => props.toggleUserInfo(user, index)}
                        />
                    )}
                </div>
            </CandidatesContainer>
        )  
}

export default candidates