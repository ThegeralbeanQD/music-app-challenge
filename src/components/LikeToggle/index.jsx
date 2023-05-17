import React, {useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const LikeToggle = () => {
    const [like, setLike] = useState(false);
  
    const handleLikeToggle = () => {
      setLike(prevState => !prevState);
    };
  
    const buttonStyle = {
      color: like ? '#d93a3a' : 'black',
    };
  
    return (
      <button onClick={handleLikeToggle} className='likeButton'>
        <FontAwesomeIcon icon={faHeart} size='2xl' className='buttonIcon' style={buttonStyle} />
        <span className='buttonText'>{like ? 'Unlike' : 'Like'}</span>
      </button>
  
    );
  };

export default LikeToggle