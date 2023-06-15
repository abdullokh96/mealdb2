import React from 'react'
import Nav from '../components/nav/nav'
import Header from '../components/header/header'
import LatestMeals from '../components/LatestMeals/LatestMeals'
import Popular_Ingredients from '../components/PopularIngredients/Popular_Ingredients'
import Random_Meals from '../components/RandomMeals/Random_Meals'
import Random_Ingredients from '../components/RandomIngredients/Random_Ingredients'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <LatestMeals/>
      <Popular_Ingredients/>
      <Random_Meals/>
      <Random_Ingredients/>
      <Footer/>
    </div>
  )
}

export default Home
