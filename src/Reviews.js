import shoe1 from './martha.jpg'
import React from "react"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';
 const Reviews = ({review, prevPerson, nextPerson, randomPerson}) => {
       return (
        <div className="container">
            <article>
            <p>{review.text} </p>
            <img src={review.image + shoe1} alt={review.name}  />
            <h4> {review.name} </h4>
            <p style={{color: 'red', textTransform:"capitalize"}}>{review.job} </p>
            <div className="myreact-icons">
            <span onClick={prevPerson}> <FaArrowAltCircleLeft /> </span>
            <span onClick={nextPerson}> <FaArrowAltCircleRight /> </span>
            </div>
            <button className="randomBtn" onClick={randomPerson}> Surprise Me </button>
            </article>
        </div>
      
    )
}
export default Reviews

