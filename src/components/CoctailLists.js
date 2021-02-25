import React from 'react'
import Single from "../pages/Coctail"
const CoctailLists = ({ loading, CoctailList }) => {
    if (loading) {
        return (
            <div>Loading</div>
        )
    }
    else {
        return (
            <div className="listOfCoctails" >
            {CoctailList.map((list) => {
                return <Single key={list.id} {...list}></Single>
            }) } 
            </div>
            )
      }
}

export default CoctailLists
