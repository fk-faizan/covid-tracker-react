const INITIAL_STATE = {data: ""}

const reducer = (state = INITIAL_STATE, action) => {
    
    switch(action.type) {
        case "FATCHDATA":
            return ({
                ...state,
                data: action.data
            })
        default:
        return state
    }
}

export default reducer;