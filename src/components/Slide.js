import React from 'react'
import { useState } from 'react'

const Slide = ({onSlide}) => {
    
    const [currentSlide, setCurrentSlide] = useState(0)
    const slides = [
        {
            title: 'Todays workout plan',
            Text: 'We are going to do three fundamental exercise'
        },
        {
            title: 'First, 10 push-ups',
            Text: 'Do 10 reps, Rememeber about full range of motion, dont run'
        },
        {
            title: 'Next, 20 squats',
            Text: 'This is slide three text'
        },
        {
            title: 'finally, 15 squats',
            Text: 'This is slide three text'
        },
    
        {
            title: 'Great job!',
            Text: 'This is slide three text'
        },
    ]

    const handlePrev = () => {
        setCurrentSlide(currentSlide - 1);
    }
    const handleNext = () => {
        setCurrentSlide(currentSlide + 1);
    }
    const handleReset = () => {
        setCurrentSlide(0);
    }


    return (


    <div className="sef">
    <div className="sefcontainer">
    <div className="content">
    
    <div className='header'>
    <h1>SLIDE APP SHOW</h1>
    </div>
    
   
    

    <button className='btn' disabled={currentSlide !==4} onClick={handleReset}> Restart</button>
    <button className='btn' disabled={currentSlide <= 0} onClick={handlePrev}>Previous</button>
    <button className='btn' disabled ={currentSlide >4} onClick={handleNext}>Next</button>
    <div className='para'>
    
    </div>
    
    <div className='slide-wrapper'>
       <div className='slide'>
        <h1 className='title'>{slides[currentSlide].title} </h1>  
        <p className='text'>{slides[currentSlide].Text} </p>  
        </div> 
    </div>
    
    </div>
    </div>
</div> 
  )
}

export default Slide