import React from 'react'
import {Link} from 'react-router-dom'
import mainImage from '../assets/image.svg'

export default function Home () {
  return (
  <>
    <div className="lead">
        <h1>LET'S GET IT!</h1>
        <h2>Create/Edit List By Clicking The Button Below</h2>
        <Link to="items" className="btn"> List of Stuff</Link>
    </div>
    <img className="lead-image" src={mainImage} alt=""/>
  </>
)
}