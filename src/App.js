import React, {useState} from "react"
import reviewsList from "./data"
import Reviews from "./Reviews"
import './App.css';
import reviews from "./data";

function App() {

  const [person, setPerson] = useState(0)
  const {...review} = reviewsList[person] // Spread operator was used to get the content in the external data


  const checkNumber = (number)=>{
      if(number > reviewsList.length-1){
        return 0
      }
      if(number < 0){
        return reviewsList.length -1
      }
      return number
     }
  



  // functionality for the prevPerson
  const prevPerson =() =>{
    setPerson((person)=>{
      let newPerson = person - 1
      return checkNumber(newPerson)
    })
  }
  const nextPerson =() =>{
    setPerson((person)=>{
      let newPerson = person + 1
      return checkNumber(newPerson)
    })
  }

 

  return (
    <div className="App">
      <h1> Our Reviews </h1>
      <div>
        <Reviews   randomPerson ={randomPerson} nextPerson={nextPerson} prevPerson={prevPerson} review={review} />
      </div>
 
    </div>
  );
}

export default App;
