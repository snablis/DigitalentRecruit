import React from 'react';
import classes from './CandidateInfo.module.css';


const candidateInfo = (props) => {
    let info = null

    if (props.showInfo) {
        info =
            <div className={classes.CandidateInfo}>
                {/* {console.log(props.data)} */}
                {/* show extra info on a candidate */}
                <p>
                    Name: {props.userInfo.name} <br />
                    Age: {props.userInfo.age} <br />
                    Mail: {props.userInfo.email} <br />
                    Address: {props.userInfo.address} <br />
                    Phone Nr: {props.userInfo.phone} <br />
                    Recruitment stage: {props.userInfo.stage}
                </p>
                {/* {console.log(props)} */}
                {/* Button to remove user */}
                <button onClick={props.click}>Less info</button>
                <button onClick={props.click} disabled={true}>Remove User</button>
                <button onClick={props.click} disabled={true}>Update Info</button>
            </div>
    }

    return (
        info
    )
}

export default candidateInfo