import React from 'react'
// import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
// import Controls from "./controls/Controls";
import { ActionButton } from './controls';

import CloseIcon from '@mui/icons-material/Close';
import { Grid, Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';

// const useStyles = makeStyles(theme => ({
//     dialogWrapper: {
//         padding: theme.spacing(2),
//         position: 'absolute',
//         top: theme.spacing(5)
//     },
//     dialogTitle: {
//         paddingRight: '0px'
//     }
// }))

export default function Popup(props) {

    const { title, children, openPopup, setOpenPopup } = props;
    // const classes = useStyles();

    return (
        <Dialog open={openPopup} maxWidth="md" >
            <DialogTitle >
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1, marginTop: 5 }}>
                        {title}
                    </Typography>
                    <ActionButton
                        color='warning'
                        onClick={()=>{setOpenPopup(false)}}>
                        <CloseIcon />
                    </ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}