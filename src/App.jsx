import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { NavBar } from './layout'
import * as Pages from './pages'

import './App.css'
// import { ArtistCard } from './components'
// import artists from './assets/artists.json'

// console.log(artists.length);

export default function App() {
  return (
    <div className='App'>
      <Routes>

        <Route path='/' element={<NavBar />}>
          <Route index element={<Pages.Home /> }/>
          <Route path='/music' element={<Pages.Music />}/>
          <Route path='/about' element={<Pages.About />}/>
        </Route>

      </Routes>
    </div>

    // <div>
    //   {artists.map((artist) => (
    //     <ArtistCard key={artist.id} artist={artist} />
    //   ))}
    // </div>
  )
}

