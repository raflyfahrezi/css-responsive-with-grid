import React from 'react'
import { useEffect, useState } from 'react'

import Item from './Item'

function App() {
    const [ array, setArray ] = useState([])

    useEffect(() => {
        const temp = []

        for (let i = 0; i <= 10; i ++) {
            temp.push(i)
        }

        setArray(temp)
    }, [])

    return (
        <div>
            { array.map((item, key) => {
                return <Item value={ item } key={ key }/>
            }) }
        </div>
    )
}

export default App;
