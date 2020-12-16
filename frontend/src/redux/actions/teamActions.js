export const getTeams = () => {
    return dispatch => {
        fetch(`http://localhost:3001/teams`)
        .then((resp) => resp.json())
        .then((teams) =>
            dispatch({ type: "fetch_team_success", payload: teams})
        )
    }
}