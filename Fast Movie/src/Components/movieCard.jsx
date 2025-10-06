function MovieCard({movie}){
function onFavoriteClick(){
    alert("cliked")
}

    return(
        <div className="movieCard">
            <div className="moviePoster">
                <img src="{movie.url}" alt="{movie.title}" />
                <div className="movieOverlay">
                    <button className="favoriteBtn" onClick={onFavoriteClick}>
                        ❤
                    </button>
                </div>
            </div>
            <div className="movieInfo">
                <h3>{movie.title}</h3>
                <p>{movie.realse_date}</p>
            </div>
        </div>
    )
}

export default MovieCard;