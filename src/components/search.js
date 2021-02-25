import React from 'react'

function search({setSearching,searching}) {
    return (
        <div className="searchingbox">
            <input type="text" className="input" value={searching} onChange={(e) => { setSearching(e.target.value) }}></input>
        </div>
    )
}

export default search
