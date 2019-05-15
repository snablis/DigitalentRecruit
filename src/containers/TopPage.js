import React from 'react';
import TitleBanner from '../components/TitleBanner/TitleBanner';
import OptionsBar from '../components/OptionsBar/OptionsBar';
import NewCandidateForm from '../components/NewCandidateForm/NewCandidateForm'

class TopPage extends React.Component {
    componentDidMount() {
        // Add function to fetch data from database
    }
    state = {
        User: {
            Name: '',
            Age: 0,
            Email: '',
            Adress: '',
            RecruitmentStep: ''
        },
        UI: {
            showForm: false
        }
    }

    showFormHandler() {
        let showFormStatus = !this.state.UI.showForm
        this.setState({
            UI: {
                showForm: showFormStatus
            }
        })
    }

    render() {
        return (
            <>
                {/* Graphic introduction on the page */}
                <TitleBanner />

                {/* Searchbar && filter options &&  Button to add new candidate. */}
                <OptionsBar
                    // showForm={() => this.showFormHandler()} />
                    showForm={() =>  this.showFormHandler()} />
                {/* Form to fill with new candidate information.  */}
                <NewCandidateForm
                    visibility={this.state.UI.showForm} />
                {/* Container with current candidates */}
            </>
        )
    }
}

export default TopPage
