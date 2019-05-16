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
            phone: 'phone',
            stage: 'Kontakt'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state);
        let essay = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
            address: this.state.adress,
            phone: this.state.phone,
            stage: this.state.stage
        }

        this.props.updateForm(essay)
        event.preventDefault();
    }

    render() {
        let form = null
        if (this.props.showForm) {
            form = <div className={classes.newCandidate}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
          <input type="text" name={'name'} onChange={this.handleChange} />
                        Age:
          <input type="number" name={'age'} onChange={this.handleChange} />
                        email:
          <input type="email" name={'email'} onChange={this.handleChange} />
                        adress:
          <input type="adress" name={'adress'} onChange={this.handleChange} />
                        phone:
          <input type="number" name={'phone'} onChange={this.handleChange} />
                        <select name={'stage'} onChange={this.handleChange}>
                            <option defaultValue="Kontakt">Kontakt</option>
                            <option value="Dialog">Dialog</option>
                            <option value="Intervju">Intervju</option>
                            <option value="Erbjudande">Erbjudande</option>
                        </select>
                        <input type="submit" value="Submit" />
                    </label>
                </form>
            </div>
        }
        return (
            form
        )
    }
}

export default newCandidate