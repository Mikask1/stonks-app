import axios from "axios"

const localhost = "http://localhost:5000"
const API = axios.create({ baseURL: localhost })

export const getStocks = (symbols) => async (dispatch) => {
    try {
        var stocks = []

        for (const symbol of symbols){
            const { data } = await API.get(`/stock/${symbol}`)
            stocks.push(data)
        }

        const action = {
            type: "FETCH_STOCK", payload: stocks
        }

        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
}

export const addStock = (symbol) => async (dispatch) => {
    try {
        const { data } = await API.get(`/stock/${symbol}`)

        if (!data["Note"] && !data["Error Message"]){
            const stocks = localStorage.getItem("stock")
            if (stocks != null) {
                localStorage.setItem("stock", stocks + `,${data["Meta Data"]["2. Symbol"]}`)
            }
            else {
                localStorage.setItem("stock", data["Meta Data"]["2. Symbol"])
            }

            const action = {
                type: "ADD_STOCK", payload: data
            }

            dispatch(action)
        }
        else{
            throw "Something went wrong"
        }
    } catch (error) {
        console.log(error.message)
    }
}

export const getQuery = (query) => async (dispatch) => {
    try {
        console.log(query);
        if (query === ""){
            throw "Empty query"
        }
        const { data } = await API.get(`/stock/search/${query}`)
        
        const action = {
            type: "QUERY", payload: data
        }

        dispatch(action)
    } catch (error) {
        console.log(error);
    }
}

export const deleteStock = (symbol) => async (dispatch) => {
    try {
        var symbols = localStorage.getItem("stock").split(",").filter(String)

        symbols = symbols.filter((sym) => sym !== symbol)

        localStorage.setItem("stock", symbols)
        
        const action = {
            type: "DELETE_STOCK", payload: symbol
        }

        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
}