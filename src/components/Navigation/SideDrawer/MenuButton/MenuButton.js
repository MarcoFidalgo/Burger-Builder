import React from 'react';

import classes from './MenuButton.module.css';
import imgPath from '../../../../assets/images/menuImage.png';

const menuButton = (props) => (
    <div
        className={classes.MenuButton}
        onClick={props.clicked}>
        <img src={imgPath} alt="MENU" />
    </div>
);

export default menuButton;