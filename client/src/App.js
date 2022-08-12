import React, { useEffect } from "react";
import "./index.css"
import useStyles from "./styles.js"

import SearchBar from "./components/SearchBar/SearchBar.js";
import Stocks from "./components/Stocks/Stocks.js";
import Title from "./components/Title/Title.js";

import { useDispatch } from "react-redux"
import { getStocks } from "./actions/stock.js";
import { useMediaQuery } from "@material-ui/core";


function App() {
  const matches = useMediaQuery('(max-width:500px)');
  const classes = useStyles()
  const dispatch = useDispatch()
  
  const symbols = localStorage.getItem("stock")

  useEffect(() => {
    if (symbols){
      dispatch(getStocks(symbols.split(",").filter(String)))
    }
  }, [dispatch])

  return (
    <main>
      <div className={classes.horizCenter}>
        <section className={classes.midSection} style={{width: matches ? "80vw" : "50vw"}}>
          <Title/>
          <div className={classes.wrapper}>
            <SearchBar />
            <Stocks />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
