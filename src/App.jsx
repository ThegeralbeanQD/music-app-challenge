import { useState } from 'react'
// import './App.css'

import artists from './assets/artists.json'

// console.log(artists.length);

export default function App() {
  return (
      <section>
        <ArtistCard />
      </section>
  )
}


const ArtistImage = ({ imageURL }) => {
  return (
      <img
      src={imageURL}
      alt="Image"
      style={{ width: '200px', height: '200px' }}
      />
  );
};

const ArtistDescription = ({ description }) => {
  return (
    <p>{description}</p>
  );
};

const LikeToggle = () => {
  const [like, setLike] = useState(false);

  const handleLikeToggle = () => {
    setLike(prevState => !prevState);
  };

  const buttonStyle = {
    backgroundColor: like ? 'red' : 'white',
  };

  return (
    <button onClick={handleLikeToggle} style={buttonStyle}>
      {like ? 'Unlike' : 'Like'}
    </button>
  );
};


function ArtistCard() {
  return (
    <section>
      {artists.map(artist => (
        <div key={artist.id}>
          <h1>{artist.name}</h1>
          <ArtistImage imageURL={artist.imgURL} />
          <h3>Genre: {artist.genre}</h3>
          <ArtistDescription description={artist.description} />
          <LikeToggle />
        </div>
      ))}
    </section>
  );
}


