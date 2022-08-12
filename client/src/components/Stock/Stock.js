import { Card, CardContent, Grow, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from "./styles.js"
import { AiOutlineClose } from 'react-icons/ai/index.js'
import { useDispatch } from 'react-redux'
import { deleteStock } from '../../actions/stock.js'
import { Line } from "react-chartjs-2"

import { Chart as ChartJS } from "chart.js/auto/auto.mjs"

const Stock = ({ stock }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const error = stock["Note"]
  const exist = !stock["Error Message"]

  if (!error && exist) {
    var symbol = stock["Meta Data"]["2. Symbol"]
    var timeZone = stock["Meta Data"]["6. Time Zone"]
    var lastRefreshed = stock["Meta Data"]["3. Last Refreshed"]

    var stockPrices = Object.values(stock["Time Series (5min)"])
      .reverse()
      .map((priceData) => (Number(priceData["4. close"])))

    var diff = (stockPrices[stockPrices.length - 1] - stockPrices[stockPrices.length - 2]).toFixed(2)

    var color = diff > 0 ? "lightgreen" : "rgb(252, 73, 73)"
    var fillColor = diff > 0 ? "rgb(144, 238, 144, 0.4)" : "rgb(252, 73, 73, 0.4)"

    var stockData = {
      labels: Object.keys(stock["Time Series (5min)"]).reverse().map((label) => label.split(" ")[1]),
      datasets: [{
        label: "Close",
        data: stockPrices,
        backgroundColor: color,
        borderColor: color,
        pointRadius: 2,
        borderCapStyle: "square",
        hoverBorderColor: "lightblue",
        pointHoverRadius: 5,
        fill: {
          target: 'origin',
          above: fillColor,
        }
      }]
    }
  }

  return (
    <Grow in={exist} timeout={800}>
      <Card className={classes.stock}>
        {!error &&
          <div>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                  <Typography style={{ fontWeight: 600 }}>{symbol}</Typography>
                  &nbsp;
                  <Typography variant="subtitle2" style={{ backgroundColor: color, color: "white", padding: "0 0.5rem" }}>{((diff > 0) ? "+" : "") + diff}</Typography>
                </div>
                <a onClick={() => dispatch(deleteStock(symbol))} style={{ cursor: "pointer" }}><AiOutlineClose size={15} /></a>
              </div>
              <Typography variant="subtitle2">{`Timezone: ${timeZone}`}</Typography>
              <Typography variant="subtitle2">{`Last Refreshed: ${lastRefreshed}`}</Typography>
            </CardContent>
            <CardContent>
              <Line data={stockData}></Line>
            </CardContent>
          </div>
        }
      </Card>
    </Grow>
  )
}

export default Stock