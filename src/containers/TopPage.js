import React from 'react';
import TitleBanner from '../components/TitleBanner/TitleBanner'
import Button from 'react-bootstrap/Button'
import style from 'bootstrap/dist/css/bootstrap.css'; // might change from bootstrap...

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
            <>
                {/* Graphic introduction on the page */}
                <TitleBanner />

                {/* Button to add new candidate. */}
                <Button
                    variant="primary"
                    onClick={() => console.log('was clicked')}
                    style={{ position: 'absolute', right: '0' }}
                >Add new Candidate</Button>

                {/* Searchbar && filter options. */}
                {/* Form to fill with new candidate information.  */}

                {/* Container with current candidates */}
            </>
        )
    }
}

export default TopPage
