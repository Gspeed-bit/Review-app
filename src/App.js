import React, {useState} from "react"
import reviewsList from "./data"
import Reviews from "./Reviews"
import './App.css';


function App() {

  const [person, setPerson] = useState(0)
  const {...review} = reviewsList[person] // Spread operator was used to get the content in the external data



  // checkNumber help to solve the error gotten each time we exceed the length of the Review array
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

 //This helps in creating a random number withput repeatation
  const randomPerson = (() =>{
    let randomPerson = Math.floor(Math.random() * reviewsList.length);
    if( randomPerson === person){
       randomPerson = person +1
    }
    return setPerson(checkNumber(randomPerson))
  })

  return (
  <section className="section">
    <main>
      <header>
      <h1> Our Reviews </h1>
      <div className="underLine"></div>
      </header>
          <Reviews  randomPerson ={randomPerson} nextPerson={nextPerson} prevPerson={prevPerson} review={review} />
      </main>
      </section>
  );
}

export default App;
