import Feed from '../components/Feed';
import Leftbar from '../components/Leftbar';
import Rightbar from '../components/Rightbar';
import Topbar from '../components/Topbar';
import './profile.css';

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className='profile'>
        <Leftbar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>

            <img className='profileCoverImg' src='assets/pfp.jpg' alt=''/>
            <img className='profileUserImg' src='assets/pfp.jpg' alt=''/>
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>Anand</h4>
              <h4 className='profileInfoDesc'>Hello My Friends</h4>
            </div>

          </div>
          <div className='profileRightBottom'></div>
          <Feed />
          <Rightbar profile/>
        </div>
      </div>
    </>
  )
}
