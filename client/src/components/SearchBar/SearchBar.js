import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai/index.js"
import { TextField, InputAdornment, IconButton, ThemeProvider, createTheme, withStyles } from "@material-ui/core"
import { useDispatch } from "react-redux"

import useStyles from "./styles.js"
import { getQuery } from "../../actions/stock.js"
import Results from "./Results/Results.js"
let theme = createTheme({
    palette: {
        secondary: {
            main: '#4d7ca1',
        },
    },
});

const SearchTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#232323',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#949494',
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: '#232323',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#232323',
            },
        },
    },
})(TextField);


const SearchBar = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [queryData, setQueryData] = useState("")
    const [showResults, setShowResults] = useState(false)

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(getQuery(queryData))
    }

    useEffect(() => {
        if (queryData === "") {
            setShowResults(false)
        }
        else{
            setShowResults(true)
        }
    }, [queryData])

    return (
        <ThemeProvider theme={theme}>
                <form onSubmit={handleSearch} className={classes.form}>
                    <SearchTextField variant='outlined' placeholder="Type to search..." label="Search" color='secondary' type="text" size='small' fullWidth
                        value={queryData} onChange={(e) => setQueryData(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton type='submit'>
                                        <AiOutlineSearch size={18} color="#949494" />
                                    </IconButton>
                                </InputAdornment>),
                            classes: {
                                adornedEnd: classes.searchIcon
                            }
                        }}
                    />
                </form>
                {showResults && <Results setShowResults={setShowResults} setQueryData={setQueryData}/>}
        </ThemeProvider>
    )
}

export default SearchBar