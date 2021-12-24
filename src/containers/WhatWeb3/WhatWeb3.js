import React from 'react'
import  './whatweb3.css';
import { Feature } from '../../components'


const WhatWeb3 = () => {
    return (
        <div className="web3__whatweb3 section__margin" id="wweb3">
          <div className="web3__whatweb3-feature">
               <Feature title="What is Web3" text="Web3, also known as Web 3.0,[1][2][3] is an idea for a new iteration of the Internet that incorporates decentralization based on blockchains."/>
          </div>
          <div className="web3__whatweb3-heading">
          <h1 className="gradient__text">
          The Possibilities are beyond your imagination
          </h1>
          <p>
          Explore the Library 
          </p>
          </div>
          <div className="web3__whatweb3-container">
          <Feature title="NFT" text="WHAT IS AN NFT? WHAT DOES NFT STAND FOR?"/>
               <Feature title="Blockchain game" text="A blockchain game is a video game that includes elements that use cryptography-based blockchain technologies"/>
               <Feature title="AI"  text="Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to natural intelligence displayed by animals including humans." />
          </div>
        </div>
    )
}

export default WhatWeb3
