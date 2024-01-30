import React, {useEffect, useState} from 'react'
import axios from "axios"

const API ="www.themealdb.com/api/json/v1/1/categories.php"

function Service() {
    const [category, setCategory] =useState([])
    const [count, setCount] = useState(0)

    async function getCategory() {
        try{
            const res = await fetch(API)

            const data = res.json()

            console.log(data)
        }catch (error) {
            console.log(error)
        }
    }

  

    

    useEffect(() => {
        getCategory()
    }, [])

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  )
}

export default Service