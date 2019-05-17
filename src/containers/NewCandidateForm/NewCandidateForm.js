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
        alert('New user ' + this.state.name + ' submitted');
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
            <h1>Add new Recruit</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
          <input type="text" name={'name'} onChange={this.handleChange} /> <br/>
                        Age:
          <input type="number" name={'age'} onChange={this.handleChange} /><br/>
                        email:
          <input type="email" name={'email'} onChange={this.handleChange} /><br/>
                        adress:
          <input type="adress" name={'adress'} onChange={this.handleChange} /><br/>
                        phone:
          <input type="number" name={'phone'} onChange={this.handleChange} /><br/>
                        Rectruitment stage: <select name={'stage'} onChange={this.handleChange}>
                            <option defaultValue="Kontakt">Kontakt</option>
                            <option value="Dialog">Dialog</option>
                            <option value="Intervju">Intervju</option>
                            <option value="Erbjudande">Erbjudande</option>
                        </select> <br/>
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