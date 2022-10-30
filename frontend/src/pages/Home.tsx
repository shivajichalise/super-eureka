import {Navbar} from '../components/Navbar/Navbar'
import {Body} from '../components/Body/Body'
import {Footer} from '../components/Footer/Footer'
import {Message} from '../components/Message/Message'

export const Home = () => {
  return (
    <>
      <Navbar />
      <Message message="Success login" type="" />
      <Body />
      <Footer />
    </>
  )
}
