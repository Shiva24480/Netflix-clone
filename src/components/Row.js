import React, { useEffect, useState } from 'react'
import './Row.css'
import Card from './Card'
import axios from '../api/axios';
import YouTube from 'react-youtube'

function Row({ title, fetchURL, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
        }
        fetchData();
    }, [fetchURL]);


    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const [trailerUrl, setTrailerUrl] = useState("");


    return (
        <div className='row'>
            <div className="row-title">{title}</div>
            <div className="row-card">
                {
                    movies.map((movie, index) =>
                        ((isLargeRow && movie.poster_path) ||
                            (!isLargeRow && movie.backdrop_path)) &&
                        (< Card key={index} movie={movie}
                            isLargeRow={isLargeRow ? isLargeRow : false}
                            setTrailerUrl={setTrailerUrl} trailerUrl={trailerUrl}
                            isList={false}
                        />)
                    )
                }
            </div>
            {/* {trailerUrl && <} */}
            {trailerUrl &&
                <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <button
                        onClick={() => setTrailerUrl("")}
                        style={{
                            padding: '0.3rem',
                            fontSize: '1rem',
                            backgroundColor: 'transparent',
                            color: 'white',
                            fontWeight: 'bolder',
                            cursor: 'pointer',
                        }}
                    >
                        Click here to Close Trailer
                    </button>
                    <YouTube videoId={trailerUrl} opts={opts} />
                </div>
            }
        </div>
    )
}

export default Row