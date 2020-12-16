import React from 'react'
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home </Link>
                </li>
                <li>
                    <Link to="/teams">Teams</Link>
                </li>
                <li>
                    <Link to="/teams/new">Create Team</Link>
                </li>
            </ul>
        </div>
    )
}
