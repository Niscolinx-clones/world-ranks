import React, {useEffect} from 'react'

export default ({countries}) => {

    // useEffect( async () => {
    //      const req = await fetch('https://restcountries.eu/rest/v2/all')
    // const countries = await req.json()

    // console.log('useEffect', countries)
    // }, [])
    console.log('the coutries', countries)
    return (
        <div>
            The Home
        </div>
    )
}



