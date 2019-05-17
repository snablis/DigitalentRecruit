import React from 'react';
import classes from './OptionsBar.module.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css'; 

const optionsBar = (props) => (
    <div className={classes.optionsBar}>
        {/* <p>Optionsbar</p> */}
        <label>
        <input type="text" name={'search'} defaultValue={'filter'} onChange={props.handleSearch} disabled={true}/>
        </label>
        {/* <p>filter/view</p> */}
        <Button
            variant="primary"
            onClick={props.showForm}
            style={{ position: 'absolute', right: '0' }}
        >Add new Candidate</Button>
    </div>
)

export default optionsBar