import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navi = useNavigate();
  return (
    <div className='MainPage'>
        <section className='Pika'>
          <div className='uperPart'>
            <h3 className='head'>Welcome to Popx</h3>
            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium!</p>
          </div>
            <section className='down-Btn'>
                <button onClick={()=>{
                    navi("/register")
                }} className='btn1'>
                    Create Account
                </button>
                <button onClick={()=>{
                    navi("/login")
                }} className='btn2'>Already Registed? Login</button>
            </section>
        </section>
    </div>
  )
}

export default Home