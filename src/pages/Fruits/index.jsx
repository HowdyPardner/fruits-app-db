import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Fruits = () => {
    const [fruits, setFruits] = useState([])
    

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:3000/fruits",
        }).then((res) => {
            console.log(res.data);
            setFruits(res.data)
        })

    }, [])

    return (
        <div>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={fruit+index}>
                        <p>{fruit.name}</p>
                        <p>{fruit.color}</p>
                        <p>{fruit.readyToEat}</p>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Fruits