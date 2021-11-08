import React, {useState} from "react"
import reviewsList from "./data"
import Reviews from "./Reviews"
import './App.css';
import reviews from "./data";

function App() {

  const [person, setPerson] = useState(0)
  const {...review} = reviewsList[person]



  const prevPerson =() =>{
    setPerson((person)=>{
      let newPerson = person - 1
      return newPerson
    })
  }
  const nextPerson =() =>{
    setPerson((person)=>{
      let newPerson = person + 1
      return newPerson
    })
  }

 

  return (
    <div className="App">
      <h1> Our Reviews </h1>
      <div>
        <Reviews  nextPerson={nextPerson} prevPerson={prevPerson} review={review} />
      </div>
 
    </div>
  );
}

export default App;
