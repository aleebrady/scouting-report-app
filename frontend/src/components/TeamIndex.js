import React from 'react'
import { connect } from 'react-redux'
import { getTeams } from "../redux/actions/teamActions"
import TeamListItem from "./TeamListItem"

class TeamIndex extends React.Component {
    componentDidMount() {
        this.props.getTeams()
    }
    render () {
        return (
            <div>
                <h1>Teams</h1>
                {this.props.teams.map(team => (
                <TeamListItem team={team} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = ({teams}) => {
    return {
        teams: teams.all
    }
}

export default connect(mapStateToProps, { getTeams })(TeamIndex)