import { makeStyles } from "@material-ui/core";

export default makeStyles((matches) => ({
    horizCenter: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
    },
    midSection: {
        marginTop: "1.5rem",
        paddingTop: "2rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        backgroundColor: "#f8f8f8",
        minHeight: "100vh",
        borderTopLeftRadius: "2rem",
        borderTopRightRadius: "2rem",
    },
    wrapper: {
        position: "relative"
    }
}))