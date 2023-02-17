import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router';

import { SingleCoin } from '../Config/api';
import axios from 'axios';

function Coin(props) {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const currency = 'USD'
  const symbol = '$'

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id)); 

    
     // getting coin data from API
    setCoin(data);
  };


  useEffect(() => {
    fetchCoin();
  }, );

  function numberWithCommas(x) {                             
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (!coin) return 
    <div> loading... </div>
  
  return (
    <>
    <div className= "flex flex-col md:flex-column">
      <div className=" container w-full md:w-fullml-12 mr-12">
        <div className="flex items-center justify-center mt-2 pt-2 mb-2 pb-2">

          <img src={coin?.image.large}  style={{
      
      }} alt={coin?.name}/>
        </div>
        <div className='flex text-center justify-items-start  flex-col mt-2 pt-4 font-nunito text-black '>
          <span className='coinname text-lg mb-2 '><strong>{coin?.name}</strong></span>


          <span className='  text-lg mb-2 '><strong>Rank: {coin?.market_cap_rank}</strong></span>
          <span className=' text-lg mb-2'><strong>Current Price: </strong> {symbol}{" "} {numberWithCommas(coin?.market_data.current_price[currency.toLowerCase()])}</span>

          <span className=' text-lg '><strong>Market Cap: </strong> {symbol}{" "} {numberWithCommas(coin?.market_data.market_cap[currency.toLowerCase()].toString().slice(0, -6))}M</span>


        </div>
      </div>
      
      </div>
    </>
  )
}

export default Coin