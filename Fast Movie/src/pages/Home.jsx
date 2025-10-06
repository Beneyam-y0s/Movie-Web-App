import MovieCard  from "../Components/movieCard"

function Home(){
    const movies = [
        {id: 1, title: "Inception", release_date: "2010-07-16"},
        {id: 2, title: "The Dark Knight", release_date: "2008-07-18"},
        {id: 3, title: "Interstellar", release_date: "2014-11-07"},
    ]

    const handleSearch = () => {
    }
    return(
        <div className="home">
            <form onSubmit={handleSearch} className="searchForm">
                <input type="text" placeholder="Search for movies..." className="searchInput" />
                <button type="submit" className="searchButton">Search</button>
            </form>
            <button type="submit"></button>
            <div className="moviesGird">
                {movies.map(movie => 
                    <MovieCard movie = {movie} key={movie.id}/>
                )}
            </div>
        </div>
    )
}

export default Home;