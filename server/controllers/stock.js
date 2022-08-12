import axios from "axios";

const API_KEY = process.env.API_KEY

export const getStock = async (req, res) => {
    const { symbol } = req.params
    var url_intraday = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol.toUpperCase()}&interval=5min&outputsize=compact&apikey=${API_KEY}`;
    var url_daily = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol.toUpperCase()}&outputsize=compact&apikey=${API_KEY}`;

    console.log("get");
    try {
        var { data } = await axios.get(url_intraday)
        var intraday_data = data
        // var { data } = await axios.get(url_daily)
        // var daily_data = data
        res.json({ ...intraday_data })
    } catch (error) {
        console.log(error);
    }
}

export const getSearch = async (req, res) => {
    const { query } = req.params
    var url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${API_KEY}`;

    try {
        const { data } = await axios.get(url)
        
        res.json(data["bestMatches"])
    } catch (error) {
        console.log(error);
    }
}