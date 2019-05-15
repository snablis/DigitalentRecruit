import React from 'react';
import TitleBanner from '../components/TitleBanner/TitleBanner'

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
        }
    }

    render() {
        return (
            // Graphic introduction on the page
            <TitleBanner />

            // Button to add new candidate.

            // Form to fill with new candidate information. 

            // Searchbar && filter options.

            // Container with current candidates
        )
    }
}

export default TopPage
