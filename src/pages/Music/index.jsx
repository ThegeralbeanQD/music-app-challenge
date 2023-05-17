import React from 'react'
import { ArtistCard } from '../../components'
import artists from '../../assets/artists.json'

const Music = () => {
  return (
    <div>
      <h1>Music Page</h1>

      {artists.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}

    </div>
  )
}

export default Music