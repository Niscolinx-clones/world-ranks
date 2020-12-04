import Head from 'next/head'

export default ({children}) => {
    return (
        <div className='container'>
            <Head>
                <title>World ranks</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <header>
             <img src='./Logo.svg' alt=''/>
            </header>

            <main className='main'>{children}</main>

            <footer className='footer'>footer</footer>
        </div>
    )
}
