import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import './HomeScreen.css'
import Row from '../components/Row'
import requests from '../api/Request'

function HomeScreen() {

  return (
    <div className='homescreen'>
      <Navbar />

      <Banner />

      <Row title="Netflix Trending" fetchURL={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Action" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Trending" fetchURL={requests.fetchTrending} />
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentary" fetchURL={requests.fetchDocumantaries} />
    </div>
  )
}

export default HomeScreen