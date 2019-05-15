import React from 'react';
import classes from './TitleBanner.module.css';

const titleBanner = (props) => (
    <div className={classes.titleBanner}>
        <p>
            Text which will be seen as a banner on top of the page
            </p>
    </div>
)

export default titleBanner