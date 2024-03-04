import { useState } from 'react'
import './App.css'
import w1 from './images/w1.png'
function App() {
 

  return (
    <>
    <div className='head'>
    <p>Best Gym Tips for Beginners</p>
    </div>
    <div className='image'>
      <img src={w1} width='100%'></img>
    </div>
    <div className='steps'>
      <h2 className='st1'>1.Set Realistic Goals</h2>
      <p> Before you begin your fitness journey, take some time to define your goals. Whether it's weight loss, muscle gain, improved endurance, or overall fitness, having clear objectives will help keep you motivated and focused. Start with achievable short-term goals that will eventually lead you to your long-term objectives.</p>
      <h2 className='st2'>2.Start Slow and Progress Gradually</h2>
      <p>It's tempting to dive into intense workouts right away, but doing too much too soon can lead to burnout or injury. Begin with lighter weights and shorter workout sessions, gradually increasing intensity, duration, and weight as your strength and endurance improve. Consistency is key, so aim for regular, manageable workouts rather than sporadic intense sessions.</p>
      <h2 className='st2'>3.Learn Proper Form</h2>
      <p>Proper form is crucial to prevent injuries and maximize the effectiveness of your workouts. Take the time to learn the correct form for each exercise you perform. If you're unsure, consider working with a personal trainer or watching instructional videos online. Focus on mastering technique before increasing weight or intensity.</p>
      <h2 className='st2'>4.Listen to Your Body and Rest</h2>
      <p>Pay attention to how your body feels during and after workouts. It's normal to experience some soreness, but sharp or persistent pain could indicate an injury. Don't push through pain – give your body time to rest and recover. Adequate rest is essential for muscle repair and growth, so incorporate rest days into your routine and prioritize quality sleep each night.</p>
    </div>

    </>
  )
}

export default App
