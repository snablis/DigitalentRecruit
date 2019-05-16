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
                showForm: false,
                filter: ''
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
        this.setState(prevState => ({
            UI:{ ...prevState.UI,
                showForm: showFormStatus}
        }))
    }

    updateFormHandler(essay) {
        this.setState(prevState => ({
            User: [...prevState.User, essay]
        }))
        console.log(this.state)
    }

    searchHandler(event) {
        console.log(event.target.value)
        let filterValue = event.target.value
        this.setState(prevState => ({
            UI:{ ...prevState.UI,
                filter: filterValue}
        }))
    }

    render() {
        // console.log(this.state)
        return (
            <>
                {/* Graphic introduction on the page */}
                < TitleBanner />

                {/* Searchbar && filter options &&  Button to add new candidate. */}
                < OptionsBar
                    showForm={() => this.showFormHandler()}
                    handleSearch={(event) => this.searchHandler(event)} />
                {/* Form to fill with new candidate information.  */}
                <NewCandidateForm
                    showForm={this.state.UI.showForm}
                    data={data}
                    updateForm={(essay) => this.updateFormHandler(essay)} />
                {/* Container with current candidates */}
                <Candidates {...this.state} />
            </>
        )
    }
}

export default TopPage
