import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Image from '../Images/img-9.jpg'
import ImageTwo from '../Images/img-2.jpg'
import ImageThree from '../Images/img-3.jpg'
import ImageFour from '../Images/img-4.jpg'
import ImageFive from '../Images/img-8.jpg'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out thes epic destinations!</h1>
            <div className="cards__container">
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src={Image}
                        text='Explore the hidden waterfall deep inside the Amazon jungle'
                        label='Adventure'
                        path='/services'/>
                        <CardItem
                        src={ImageTwo}
                        text='Travel through the Islands of Bali in a Private Cruise'
                        label='Luxury'
                        path='/services'/>
                    </ul>
                    <ul className='cards__items'>
            <CardItem
              src={ImageThree}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
            src={ImageFour}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={ImageFive}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/signup'
            />
          </ul>
                </div>

            </div>
        </div>
    )
}

export default Cards
