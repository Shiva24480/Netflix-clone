import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import Navbar from '../components/Navbar'
import Row from '../components/Row';
import { selectList } from '../features/mylistSlice';
import './MyList.css'
import YouTube from 'react-youtube';

function MyList() {
    const list = useSelector(selectList);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const [trailerUrl, setTrailerUrl] = useState("");

    return (
        <div className='mylist'>
            < Navbar />
            <div className='mylist-row'>
                <div className="mylist-row-title">My List</div>
                <div className="mylist-row-card">
                    {
                        list.length > 0? (
                        list.map((movie, index) =>
                            <Card key={index} movie={movie}
                                isLargeRow={false}
                                setTrailerUrl={setTrailerUrl} trailerUrl={trailerUrl} 
                                isList={true}
                            />
                        )
                        ) : (
                            <h1 style={{marginLeft:'32%'}}>Please add movies in your List</h1>
                        )
                    }
                </div>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
            {/* <ToastContainer /> */}
        </div >
    )
}

export default MyList