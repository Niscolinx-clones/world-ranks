import Home from './Home'

const App = ({countries}) => {
    return (
        //About to add react contect
        <div className='home'>
            <Home countries={countries}/>
        </div>
    )
}

export default App
