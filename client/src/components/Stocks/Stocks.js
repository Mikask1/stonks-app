import { useSelector } from "react-redux"
import Stock from "../Stock/Stock.js"

import useStyles from "./styles.js"

export const Stocks = () => {
    const classes = useStyles()

    const stocks = useSelector((state) => state.stock)

    var id = 0
    return (
        <section className={classes.stocks}>
            {stocks.map((stock) => {
                return <Stock key={id += 1} stock={stock} />
            })}
        </section>
    )
}

export default Stocks