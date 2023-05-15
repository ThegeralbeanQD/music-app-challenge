import { useState } from 'react'
import './App.css'

import artists from './assets/artists.json'

// console.log(artists.length);

export default function App() {
  return (
      <section>
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </section>
  )
}


const LikeToggle = () => {
  const [like, setLike] = useState(false);

  const handleLikeToggle = () => {
    setLike(prevState => !prevState);
  };

  const buttonStyle = {
    backgroundColor: like ? 'red' : 'white',
  };

  return (
    <button onClick={handleLikeToggle} style={buttonStyle} className='likeButton'>
      {like ? 'Unlike' : 'Like'}
    </button>
  );
};

function ArtistCard({ artist }) {
  return (
    <div className='artistCard'>
      <h2 className='artistName'>{artist.name}</h2>
      <img src={artist.imgURL} className='artistPhoto'/>
      <p className="artist-description">{artist.description}</p>
      <h3>Top Albums</h3>
      <div className="album-covers">
        {artist.topSoldAlbums.map((album) => (
          <div key={album.albumName} className='album-holder'>
            <img src={album.albumCover} alt={album.albumName} className="album-cover"/>
            <p>{album.albumName}</p>
            <p>{album.releaseDate}</p>
          </div>
        ))}
      </div>
      <LikeToggle />
    </div>
  );
}


