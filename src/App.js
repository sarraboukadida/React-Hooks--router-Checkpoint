
import './App.css';
import React,{useState} from 'react';
import MovieList from './MovieList'
import Filter from './Filter';

function App() {
  const [keysearch, setKeysearch] = useState("");
  const [newRate, setNewRate] = useState(1);

  const [movies,setMovies] = useState ([
    {
      title:"Joker",
      description:"The son of a virtual world designer goes looking for his father and ends up inside the digital world that his father designed.",
      posterURL: "https://www.irishnews.com/picturesarchive/irishnews/irishnews/2019/10/01/155114173-96e43cff-d031-4112-a87a-525f6d680fc4.jpg" ,
      rating: 3,
      
      },
      {
      title:"How to marry a millionaire",
      description:"How to Marry a Millionaire is a 1953 American romantic comedy film directed by Jean Negulesco ",
      posterURL:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2014%2F08%2Flauren-bacall-04_612x380_1.jpg&q=60",
      rating: 2,
      
      },

      {
        title:"The visitors",
        description:"Walter Vale is a sullen, lonely economics professor in Connecticut,",
        posterURL:"https://www.hollywoodreporter.com/wp-content/uploads/2016/04/ressources_2016-03-01_15-01-06_16062015-_dsc6010_copy-h_2016.jpg",
        rating: 5,
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
      
       <Filter search={search} setRate={setRate} newRate={newRate}/>
       <MovieList addMovie={addMovie} movies={movies.filter ( el=> el.title.toLowerCase().includes(keysearch.toLowerCase().trim()))} />
     
    </div>
  );
}
export default App;