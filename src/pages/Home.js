import Feed from '../components/Feed'
import Leftbar from '../components/Leftbar'
import Rightbar from '../components/Rightbar'
import Topbar from '../components/Topbar'
import './home.css'

export default function Home() {
  return (
    <>
      <Topbar />
      <div className='homeContainer'>
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>

    </>
  )
}
