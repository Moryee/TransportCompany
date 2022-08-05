import React from 'react'
import { Button } from "@mui/material";

export default function ActionButton(props) {

    const { color, children, onClick } = props;

    return (
        <Button
            color={color}
            onClick={onClick}>
            {children}
        </Button>
    )
}