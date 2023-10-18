import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Fruits = () => {
    const [fruits, setFruits] = useState([])
    

    useEffect(() => {
        axios({
            method: "GET",
            url: "/server/fruits",
        }).then((res) => {
            console.log(res.data);
            setFruits(res.data)
        })

    }, [])

    return (
        <div>
            <ul className='fruit-list'>
                {fruits.map((fruit, index) => (
                    <li className='fruit-item' key={fruit+index}>
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