import React from 'react';
import classes from './Candidates.module.css';
import CandidatesContainer from './CanditatesContainer/CandidatesContainer'
import Candidate from './Candidate/Candidate'


class candidates extends React.Component {

    state = {
        showUserInfo: false
    }

    toggleUser(user) {
        this.setState({ showUserInfo: true });
        console.log(user)
    }

    render() {
        return (
            <CandidatesContainer>
                <div className={classes.Candidates}>
                    {/* {console.log(props.data)} */}
                    {/* add filter option to only visualize Candidates with certain search criteria */}
                    {this.props.User.map((user) =>
                        <Candidate // Render alternative if clicked with more information and options
                            key={user.phone}
                            name={user.name}
                            age={user.age}
                            email={user.email}
                            address={user.address}
                            stage={user.stage}
                            phone={user.phone}
                            click={() => this.toggleUser(user)}
                        />
                    )}
                </div>
            </CandidatesContainer>
        )
    }
}

export default candidates