import Head from 'next/head'
import {Hello as Logo} from '../assets/Logo.svg'

export default ({children}) => {
    return (
        <div className='container'>
            <Head>
                <title>World ranks</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <header>
             {Logo}
            </header>

            <main className='main'>{children}</main>

            <footer className='footer'>footer</footer>
        </div>
    )
}
