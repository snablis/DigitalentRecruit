import React from 'react';
import TitleBanner from '../components/TitleBanner/TitleBanner';
import OptionsBar from '../components/OptionsBar/OptionsBar';
import NewCandidateForm from './NewCandidateForm/NewCandidateForm'
import Candidates from '../components/Candidates/Candidates'
import data from '../assets/mockdata.json'

class TopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            User:
                data.User,
            UI: {
                showForm: false
            }
        };
    }

    componentDidMount() {
        // load user data to state
        // this.setState({ User: data.User });
        // console.log(this.state)
    }
    // state = {
    //     User: {
    //         Name: '',
    //         Age: 0,
    //         Email: '',
    //         Adress: '',
    //         RecruitmentStep: ''
    //     },
    //     UI: {
    //         showForm: false
    //     }
    // }

    showFormHandler() {
        let showFormStatus = !this.state.UI.showForm
        this.setState({
            UI: {
                showForm: showFormStatus
            }
        })
    }

    updateFormHandler(essay){
        this.setState(prevState => ({
            User: [...prevState.User, essay]
          }))
    }

    render() {
        // console.log(this.state)
        return (
            <>
                {/* Graphic introduction on the page */}
                <TitleBanner />

                {/* Searchbar && filter options &&  Button to add new candidate. */}
                <OptionsBar
                    showForm={() => this.showFormHandler()} />
                {/* Form to fill with new candidate information.  */}
                <NewCandidateForm
                    showForm={this.state.UI.showForm}
                    data={data} 
                    updateForm={(essay) => this.updateFormHandler(essay)}/>
                {/* Container with current candidates */}
                <Candidates data={this.state.User} />
            </>
        )
    }
}

export default TopPage
