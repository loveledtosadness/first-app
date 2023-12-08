import React from "react";
import classes from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id ;
    let DialogsData = [
        {id: "1", name: "Zxkill"},
        {id: "2", name: "Zxclap"},
        {id: "3", name: "Zxcorn"},
        {id: "4", name: "Zxcock"},
        {id: "5", name: "Zxcount"},
        {id: "6", name: "Zxclick"},
        {id: "7", name: "Zxcum"},
    ];
    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.active}> {props.name} </NavLink>
        </div>
    )
}

const FriendZone = (props) => {
    return (
        <div className={classes.message}>
            {props.text}
        </div>
    )
}

const Dialogs = (props) => {

    let DialogsData = [
        {id: "1", name: "Zxkill"},
        {id: "2", name: "Zxclap"},
        {id: "3", name: "Zxcorn"},
        {id: "4", name: "Zxcock"},
        {id: "5", name: "Zxcount"},
        {id: "6", name: "Zxclick"},
        {id: "7", name: "Zxcum"},
    ];

    let messagesData = [
        {id: "1", text: "Sinok ne kolis' v mashine"},
        {id: "2", text: "Papa otstan' ya ghoul"},
        {id: "3", text: "Hotyabi ostav' mne"},

    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name={DialogsData[0].name} id={DialogsData[0].id}/>
                <DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>
                <DialogItem name={DialogsData[2].name} id={DialogsData[2].id}/>
                <DialogItem name={DialogsData[3].name} id={DialogsData[3].id}/>
                <DialogItem name={DialogsData[4].name} id={DialogsData[4].id}/>
                <DialogItem name={DialogsData[5].name} id={DialogsData[5].id}/>
                <DialogItem name={DialogsData[6].name} id={DialogsData[6].id}/>
            </div>
            <div className={classes.messages}>
                <FriendZone text={messagesData[0].text} id={messagesData[0].id}/>
                <FriendZone text={messagesData[1].text} id={messagesData[1].id} />
                <FriendZone text={messagesData[2].text} id={messagesData[2].id}/>
            </div>
        </div>
    );
}

export default Dialogs;