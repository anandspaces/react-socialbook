import Post from './Post';
import Share from './Share';
import './feed.css';

export default function Feed() {
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share/>
        <Post />
      </div>
    </div>
  )
}
