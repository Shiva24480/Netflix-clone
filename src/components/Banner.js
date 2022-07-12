import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../api/axios';
import requests from '../api/Request';
import { Link } from 'react-router-dom';

function Banner() {
    const [movie, setMovie] = useState();

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request
        }
        fetchData();
    }, [])


    return (
        <header className='banner' style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`
        }}>
            <div className="banner-content">
                <div className="banner-title">{movie?.title || movie?.name || movie?.original_name}</div>
                {/* <button className='banner-button'>Play</button> */}
                <Link to='/mylist'>
                    <button className='banner-button'>My List</button>
                </Link>
                <div className="banner-description">
                    {truncate(movie?.overview, 250)}
                </div>
            </div>
            <div className="banner-fade" />
        </header>
    )
}

export default Banner