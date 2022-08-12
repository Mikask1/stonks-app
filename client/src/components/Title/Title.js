import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core';

import useStyles from "./styles.js"

const Title = () => {
    const classes = useStyles()
    const today = new Date();
    const [clock, setClock] = useState()

    useEffect(() => {
        setInterval(() => {
            const d = new Date()
            setClock(d.toLocaleTimeString())
        })
    }, [])

    return (
        <section>
            <Typography variant="h5" style={{ textAlign: "left" }}>STONKS</Typography>
            <div className={classes.date}>
                <Typography variant="h6" className={classes.gray}>{today.toLocaleDateString()}</Typography>
                <Typography variant="h6" style={{ color: "gray" }}>{clock}</Typography>
            </div>
        </section>
    )
}

export default Title