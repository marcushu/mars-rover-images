import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps /*, AppContext */ } from 'next/app'
import { Container } from 'react-bootstrap'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container fluid>
      <Component {...pageProps} />
    </Container>   
    
  )
}

export default MyApp
