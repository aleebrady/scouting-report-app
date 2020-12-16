import React, { Component } from 'react'

export default class TeamForm extends Component {
    state = {
        city: "",
        name: "",
        coach: "",
        est: ""
    }

    submit = e => {
        e.preventDefault()
        this.setState({
            city: "",
            name: "",
            coach: "",
            est: ""
        })
    }

    render() {
        return (
            <div>
                <h1>Create a Team</h1>
                <form onSubmit={this.submit}>
                    City: <input onChange={e => this.setState({city: e.target.value})} 
                    type="text" value={this.state.city} />
                    Name: <input onChange={e => this.setState({name: e.target.value})} 
                    type="text" value={this.state.name} />
                    Coach: <input onChange={e => this.setState({coach: e.target.value})}
                    type="text" value={this.state.coach} />
                    EST: <input onChange={e => this.setState({est: e.target.value})} 
                    type="number" value={this.state.est} />
                    <input type="submit" value="Create Team" />
                </form>
            </div>
        )
    }   
}
