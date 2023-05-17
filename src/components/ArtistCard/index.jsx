import React from 'react'
import { LikeToggle } from '..'

function ArtistCard({ artist }) {
    return (
      <div className='artistCard'>
        <h2 className='artistName'>{artist.name}</h2>
        <img src={artist.imgURL} className='artistPhoto' />
        <p className="artist-description">{artist.description}</p>
        <h3>Top Albums</h3>
        <div className="album-covers">
          {artist.topSoldAlbums.map((album) => (
            <div key={album.albumName} className='album-holder'>
              <img src={album.albumCover} alt={album.albumName} className="album-cover" />
              <h4>{album.albumName}</h4>
              <p>{album.releaseDate}</p>
            </div>
          ))}
        </div>
        <LikeToggle />
      </div>
    );
  }
  

export default ArtistCard