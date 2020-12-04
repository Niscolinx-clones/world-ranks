const Home = ({countries}) => {
    console.log('the coutries', countries)
    return (
        <div>
            The Home
        </div>
    )
}

export const getStaticProps = async () => {
    const req = await fetch('https://restcountries.eu/rest/v2/all')
    const res = await req.json()

    return {
        props: {
            countries: res
        }
    }
    
}

export default Home