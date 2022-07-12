import React, { useState } from 'react'
import './Card.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
// import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
// import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import movieTrailer from 'movie-trailer'
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, delMovie, selectList } from '../features/mylistSlice';

function Card({ movie, isLargeRow, setTrailerUrl, trailerUrl, isList }) {

    const list = useSelector(selectList);
    const dispatch = useDispatch();

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    const base_URL = 'https://image.tmdb.org/t/p/original/';

    //======================================//

    const handleClick = () => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.title || "")
                .then((url) => {
                    // var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
                    // var match = url.match(regExp);
                    // const newurl = (match && match[7].length === 11) ? match[7] : false;

                    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
                    var match = url.match(regExp);
                    let newurl;
                    if (match && match[2].length === 11) {
                        newurl = match[2];
                    } else {
                        newurl = false;
                    }
                    setTrailerUrl(newurl);
                })
                .catch(err => console.log(err));
        }
    }

    //=====================================//

    const handleMylist = () => {
        dispatch(addMovie(movie));
    }

    const handleRemove = () => {
        console.log("del");
        dispatch(delMovie(movie.id));
    }

    return (
        <div className='card'>
            <img className={`poster ${isLargeRow && "large-poster"}`}
                src={`${base_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name} />
            <div className="card-description">
                <div className="card-options">
                    <div className="option" onClick={() => handleClick()} >
                        <PlayCircleOutlineIcon className='option-icon' />
                    </div>
                    <div className="option">
                        {
                            isList ?
                                <RemoveCircleOutlineIcon className='option-icon' onClick={handleRemove} /> :
                                <AddCircleOutlineIcon className='option-icon' onClick={handleMylist} />
                        }
                    </div>
                    {/* <div className="option">
                        <ThumbUpOffAltIcon />
                    </div>
                    <div className="option">
                        <ThumbDownOffAltIcon />
                    </div> */}
                </div>
                <div className="card-overview">{isLargeRow ? truncate(movie?.overview, 100) : truncate(movie?.overview, 150)}</div>
            </div>
        </div>
    )
}

export default Card