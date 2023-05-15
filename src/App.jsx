import { useState } from 'react'
// import './App.css'

import artists from './assets/artists.json'

artists.forEach((artist) => {
  console.log(artist.id)
});

export default function App() {
  return (
    <div>
      <h1>Counter</h1>
      <MyButton />
      <h1>Artist Image</h1>
      <ArtistImage />
    </div>
  )
}

function MyButton() {
  const [count, setCount] = useState(0)

  return (

    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>

  )
}

const ImageComponent = ({ imageURL }) => {
  return (
    <div>
      <img
      src={imageURL}
      alt="Image"
      style={{ width: '200px', height: '200px' }}
      />
    </div>
  );
};

function ArtistImage() {
  return (
    <section>
      {artists.map(artist =>
        <ImageComponent key={artist.id} imageURL={artist.imgURL} />
      )}
    </section>
  );
}