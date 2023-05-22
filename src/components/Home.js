import React from 'react'
import ImageBg from '../assesst/img1.jpg';

function Home() {
    console.log('calleddd')
  return (
    <main>
      <img alt='image' src={ImageBg} className="absolute object-cover w-full h-full"/>
      <section>
        <h1>Hello.., I'm Jayakkumar</h1>
      </section>
    </main>
  )
}

export default Home
