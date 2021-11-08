import React from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';
 const Reviews = ({review, prevPerson, nextPerson, randomPerson, randomPerson}) => {


    return (
        <div>
            <h4> {review.name} </h4>
            <button onClick={prevPerson}> <FaArrowAltCircleLeft /> </button>
            <button onClick={nextPerson}> <FaArrowAltCircleRight /> </button>
            <button onClick={randomPerson}> jhgkfs </button>


        </div>
      
    )
}
export default Reviews

