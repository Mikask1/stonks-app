import React, { useEffect } from 'react'
import { AiOutlinePlus } from "react-icons/ai/index.js"
import { IconButton, Paper, Typography } from "@material-ui/core"

import useStyles from "./styles.js"
import { useDispatch, useSelector } from "react-redux"
import { addStock } from '../../../actions/stock.js'

const Results = ({ setShowResults, setQueryData }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const query = useSelector((state) => state.query)

    const handleAddStock = (symbol) => {
        dispatch(addStock(symbol))
        setShowResults(false)
        setQueryData("")
    }

    const exist = query && !query["Note"] && !query["Error Message"]
    var id = 0
    return (
        <Paper className={classes.results}>
            {exist && query.map((stock) => (
                <div key={id += 1} className={classes.result}>
                    <div>
                        <div>
                            <Typography style={{ display: "inline", fontWeight: 600 }} variant="body1">{stock["1. symbol"]}</Typography>
                            &nbsp;
                            <Typography variant="caption">{`(${stock["3. type"]})`}</Typography>
                        </div>
                        <div>
                            <Typography style={{ display: "inline" }} variant="subtitle1">{stock["2. name"]}</Typography>
                            &nbsp;
                            <Typography style={{ display: "inline" }} variant="subtitle2">{"- " + stock["4. region"]}</Typography>
                        </div>
                    </div>
                    <IconButton onClick={() => handleAddStock(stock["1. symbol"])} size='medium'><AiOutlinePlus size={15} /></IconButton>
                </div>
            ))}
        </Paper>
    )
}

export default Results
