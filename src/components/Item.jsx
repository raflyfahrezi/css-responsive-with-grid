import React from 'react'

import './Item.css'

const Item = ({ value }) => {
    return (
        <div className="card"> 
            <p>{ value }</p>
        </div>
    )
}

export default Item
