import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PermContactCalendar from "@material-ui/icons/PermContactCalendar";
import Divider from '@material-ui/core/Divider';

const StudentsList = ({student, handleOpen}) => {
        return <div>
            <ListItem  button >
                <ListItemText primary={student.fname} />
                <ListItemIcon onClick={handleOpen(student)}><PermContactCalendar /></ListItemIcon>
            </ListItem>
            <Divider />
        </div>
}

export default StudentsList;
