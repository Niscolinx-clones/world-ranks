import Layout from '../containers/Layout'
import App from '../containers/App'

export default function Home({countries}) {
  return (
    <Layout>
      <App countries={countries}/>
    </Layout>
  )
}

export const getStaticProps = async (any) => {
     const req = await fetch('https://restcountries.eu/rest/v2/all')
     const countries = await req.json()

    return {
      props: {
        countries
      }
    }
}
