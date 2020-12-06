import Home from './Home'

const App = ({countries}) => {
    console.log('the countries', countries)
    return (
        <div className='home'>
            <Home countries={countries}/>
        </div>
    )
}

export default App
