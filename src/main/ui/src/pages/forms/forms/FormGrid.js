import React, { useState, useEffect } from 'react'
import { Grid, } from '@mui/material';

export default function FormStructure(props) {
    return (
        <Grid container
                direction={'column'}
                rowGap={2}
                sx={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', paddingBottom: '20px' }}></Grid>
    )
}

