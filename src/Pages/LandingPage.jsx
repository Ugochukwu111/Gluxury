import { Footer } from '../components/Footer'
import {  SideBarHeader } from '../components/SideBarHeader'

import './LandingPage.css'

export function LandingPage(){
  return(
   <div className='landing-page-container'>
    <SideBarHeader />
      <section className='main-content'>
        <div>
          <h1>
            Gluxury, Designed for the Woman Who Walks in Confidence.
          </h1>
          <p>
             Gluxury is where trust meets beauty. Designed for women who value quality and love speed, we deliver a shopping experience that feels elegant, reliable, and made just for you.
          </p>
        </div>

        <div></div>
      </section>
    <Footer/>
   </div>
  )
}