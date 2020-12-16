function teamReducer(state = { all: [] }, action) {
    switch(action.type) {
        case "fetch_team_success":
            return { ...state, all: action.payload }
        default:
            return state
    }

}

export default teamReducer