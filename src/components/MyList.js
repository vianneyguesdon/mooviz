import React from "react";

class MyList extends React.Component{

  // componentDidMount()
  // const countries = ['france', 'italy'];

  // // single task promise returning a promise
  // const fetchCountry = (country) => 
  //   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
  //   .then(res => res.json())
  //   .then(data => data[0]);

  // Promise.all(countries.map(country => fetchCountry(country)))
  //   .then((countries) => {
  //     // receives an array of responses
  //     countries.forEach(country => {
  //       console.log('country.capital', country.capital);
  //     });
  //   });


  render(){
  
  // On récupère la liste stockée dans le local storage
  let listOfMovies = localStorage.getItem('myList');
  listOfMovies = JSON.parse(listOfMovies);
  console.log("localStorage",listOfMovies);
  
    return(
      <div>
        <p>{}</p>
      </div>
    )
  }
}

export default MyList;