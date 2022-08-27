
import './App.css';
import React,{useState} from 'react';
import MovieList from './MovieList'
import Filter from './Filter';
import {Routes,Route} from 'react-router-dom';
import Description from './Description';


function App() {
  const [keysearch, setKeysearch] = useState("");
  const [newRate, setNewRate] = useState(1);

  const [movies,setMovies] = useState ([
    {
      title:"Joker",
      description:"TArthur Fleck, comédien raté, rencontre des voyous violents en errant dans les rues de Gotham City déguisé en clown. Méprisé par la société, Fleck s'enfonce peu à peu dans la démence et devient le génie criminel connu sous le nom de Joker, un dangereux tueur psychotique.",
      posterURL: "https://www.irishnews.com/picturesarchive/irishnews/irishnews/2019/10/01/155114173-96e43cff-d031-4112-a87a-525f6d680fc4.jpg" ,
      rating: 5,
      trailerLink:"https://youtu.be/OoTx1cYC5u8"
  
      },

      {
      title:"How to marry a millionaire",
      description:"Three women set out to find eligible millionaires to marry, but find true love in the process. Three women set out to find eligible millionaires to marry, but find true love in the process. Three women set out to find eligible millionaires to marry, but find true love in the process.",
      posterURL:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2014%2F08%2Flauren-bacall-04_612x380_1.jpg&q=60",
      rating: 2,
      trailerLink: "https://youtu.be/2huYSx6b1kA",
      },

      {
        title:"The visitors",
        description:"Professeur d'économie dans une université du Connecticut, Walter Vale, la soixantaine, a perdu son goût pour l'enseignement et mène désormais une vie routinière. Il tente de combler le vide de son existence en apprenant le piano, mais sans grand succès.",
        posterURL:"https://www.hollywoodreporter.com/wp-content/uploads/2016/04/ressources_2016-03-01_15-01-06_16062015-_dsc6010_copy-h_2016.jpg",
        
        rating: 5,
        trailerLink:"https://youtu.be/qN4iuQRLE60",
        },

  ])

const search =(text)=> {
  setKeysearch(text)
}
const setRate =(rate)=> {
  setNewRate(rate)
}

const addMovie=(movie)=> {
   setMovies(movies.concat(movie))
}


return (
    <div className="App">
  
      <Routes> 
       <Route path='/' 
       element = {
       <>
       
       <MovieList addMovie={addMovie} movies={movies.filter ( el=> el.title.toLowerCase().includes(keysearch.toLowerCase().trim()))} />
       <Filter search={search} setRate={setRate} newRate={newRate}/>
       
       </>

       }
       />
       <Route path='/description/:title' element={<Description movies={movies} addMovie={addMovie} setMovies={setMovies} />} />

      </Routes>
      
      
    </div>
  );
}
export default App;