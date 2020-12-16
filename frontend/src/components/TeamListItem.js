import React from 'react'

export default function TeamListItem( { team }) {
    return (
        <div>
            <strong>{team.city} {team.name}</strong> - Head Coach: {team.coach}
        </div>
    )
}
