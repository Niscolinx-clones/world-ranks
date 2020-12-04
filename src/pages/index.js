import Layout from '../containers/Layout'
import App from '../containers/App'

export default function Home(props) {
  console.log('the home props', props)
  return (
    <Layout>
      <App/>
    </Layout>
  )
}

export const getStaticProps = (any) => {
  console.log('any', any)
  return {
    name: 'Collins'
  }
}
