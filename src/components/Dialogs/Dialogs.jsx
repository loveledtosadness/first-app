import React from "react";
import classes from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/1' activeClassName={classes.active}>Zxclip </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2' activeClassName={classes.active}>Zxclap </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>Zxcock </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4'>Zxcorn </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/5'>Zxcount </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/6'>Zxclick </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/7'>Zxcum </NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    How you doing? Sin blyadi hihihihi
                </div>
                <div className={classes.message}>
                    Shadoshadofin ey paren' bez obid ey
                </div>
                <div className={classes.message}>
                    reyz bisteree chem stumpide a uglyface yje razbit
                </div>
            </div>
        </div>
    );
}

export default Dialogs;