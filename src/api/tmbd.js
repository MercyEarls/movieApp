import axios from "axios";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWNkNGY3YTY4YTIyYjUyMzZiOWYwOTM5YmExNmRmNSIsInN1YiI6IjY0NmQ2MDY4MmJjZjY3MDBlM2JjYWFkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TzTTiuMPjEXM_eZMYsrJM2WD9M2uWS0W6g5z2tso0vQ'
    }
})