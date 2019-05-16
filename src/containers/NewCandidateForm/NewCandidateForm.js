import React from 'react';
import classes from './NewCandidate.module.css';

class newCandidate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Name',
            age: 'age',
            email: 'email',
            adress: 'adress',
            phone: 'phone'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Need to handle each change value from the forms
    handleChange(event) {
        this.setState({ event: event.target.value });
        console.log(event.target)
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        let form = null
        if (this.props.showForm) {
            form = <div className={classes.newCandidate}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
          <input type="text" name={this.state.name} onChange={this.handleChange} />
                        Age:
          <input type="number" age={this.state.age} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        }
        return (
            form
        )
    }
}

export default newCandidate