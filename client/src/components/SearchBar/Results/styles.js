

import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    results: {
        position: "absolute",
        width: "100%"
    },
    result: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid lightgray",
        margin: "0 1rem",
        padding: "0.5rem 0",
    },
}))