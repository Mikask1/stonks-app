const stockReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_STOCK":
            return action.payload
        case "ADD_STOCK":
            return [...state, action.payload]
        case "DELETE_STOCK":
            return state.filter((stock) => stock["Meta Data"]["2. Symbol"] !== action.payload)
        default:
            return state
    }
}

export default stockReducer