import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png'
const Header = () => {
    return (
        <div className="web3__header section__padding" id='home'>
            <div className="web3__header-content">
                <h1 className="gradient__text">Let's Build Virtual World</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.

                </p>
                <div className="web3__header-content__input">
                    <input type="email" placeholder="Your email address" />
                    <button type="button">Get Started</button>
                </div>
                <div className="web3__header-content__people">
                    <img src={people} alt="people" />
                    <p>1,600 people requested access a visit in last 24 hours
                    </p>
                </div>
            </div>
            <div className='web3__header-image'>
                  <img src={ai}  alt='ai' />
                </div>
        </div>
    )
}

export default Header
