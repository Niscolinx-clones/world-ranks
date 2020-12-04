import React, {useEffect} from 'react'

export default (props) => {

    // useEffect( async () => {
    //      const req = await fetch('https://restcountries.eu/rest/v2/all')
    // const countries = await req.json()

    // console.log('useEffect', countries)
    // }, [])
    console.log('the coutries', props)
    return (
        <div>
            The Home
        </div>
    )
}

export const getInitialProps =  (any) => {
    // const req = await fetch('https://restcountries.eu/rest/v2/all')
    // const countries = await req.json()


    return {
       name: 'Collins'
    }
    
}

