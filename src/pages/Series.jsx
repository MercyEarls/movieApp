import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "../api/tmbd"


const Series = () => {
    const getPostURL = (posterpath) => {
        return `https://www.themoviedb.org/t/p/w1280/${posterpath}`
    }
    const param = useParams()
    const [movie, setMovie] = useState({})
    const movieID = param.id
    useEffect(() => {
        const getMovieDetail = async() => {
            const response = await axios.get(`tv/${movieID}`)
            setMovie(response.data)
        }
        getMovieDetail()
    }, [])
    const setBackgroundImg = (posterpath) => {
        return `url(https://www.themoviedb.org/t/p/w1280/${posterpath})`
    }
  return (
    <section className='movie-body' style={{backgroundImage: setBackgroundImg(movie.poster_path), backgroundRepeat: "repeat-x", backgroundSize: "cover"} }>
        <div className="overlay"></div>
        <div className='grid grid-cols md:grid-cols-2 p-5' style={{position: "relative"}}>
            <div className='MovieImg'>
                <img src={getPostURL(movie?.poster_path)} alt={movie?.name ? movie.name : movie.title} />
            </div>
            <div className='MovieContent'>
                <h4 className='font-bold text-2xl pt-3'>{movie?.name ? movie.name : movie.title}</h4>
                <h6 className='text-muted pt-3'>{movie?.tagline}</h6>
                <h4 className='font-bold pt-3'>Overview</h4>
                <p className='pt-3'>{movie?.overview}</p>
                <p><span className='font-bold text-2xl pt-3'>Genres: </span> {movie?.genres ? movie?.genres.map(genre => <span className='genre'>{genre.name}</span>) : ""} </p>
                {/* <p
                className='mt-3'>
                    Runtime: {movie.episode_run_time ? movie?.episode_run_time.map(episode => {
                    return( <span>{episode}</span>)
                }
                ) : "No Runtime"}</p> */}
            </div>
        </div>
    </section>
    
  )
}

export default Series