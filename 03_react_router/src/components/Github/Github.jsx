import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const [data, setData] = useState([]);

    useEffect(()=> {
        fetch('https://api.github.com/users/farmanali6349')
            .then((response) => response.json())
            .then((myData) => setData(myData))
    }, [])

    return (
        <>
            <div>Github</div>
            <code>
                <h1>Git Hub</h1>
                {JSON.stringify(data)}
            </code>
        </>

    )
}

export default Github


export const loadData = async () => {


}