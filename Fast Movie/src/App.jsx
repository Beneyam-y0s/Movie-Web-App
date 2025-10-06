import './App.css'
import MovieCard from './Components/movieCard'

function App() {
  const movieNumber = 1;
  return (
    <>
      {movieNumber === 2 ?(
      <MovieCard movie={{title: "22 street", realse_date: "2025"}}/>
      ) :(
        <MovieCard movie={{title: "balecia", realse_date: "2023"}}/>
      )}
    </>
    
    
  )
}


export default App
