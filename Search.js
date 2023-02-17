import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SearchIcon from "../Components/Assets/SearchIcon.svg"
import { CoinList } from '../Config/api';
import { useNavigate } from 'react-router';
function Search() {
  const navigate = useNavigate();
  const [search, setSearch] = useState([]);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [id, setId] = useState('');
  const currency = 'USD'
  const fetchCoins = async () => {
    const { data } = await axios.get(CoinList(currency));
    setSearch(data);

  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);
  const onSuggestHandler = (text, coin_id) => {
    setText(text);                                  
     // autosuggestion function

    setSuggestions([]);
    setId(coin_id)
    navigate(`/coinPage/${coin_id}`)
    console.log(id, 'change')
  }


  const onChangeHandeler = (text) => {
    let matches = []       
    
    // search functionality

    
    if (text.length >= 0) {
      matches = search.filter(search => {
        const regex = new RegExp(`${text}`, "gi");

        return search.name.match(regex)

      })


      setSuggestions(matches)
      setText(text)
    }}
    const showAlert=(user_input)=>{                   
      
      
      // Alert for wrong input
      if(user_input!==search.filter.name)
      {
      alert("please enter a valid coin")
      }

    }

  return (
    <>
<div className='container'>
  <div className='absolute w-1/2 mx-auto mt-3 h-12 left-36 md:w-1/3' onBlur={() => {
        setTimeout(() => { setSuggestions() }, 1000);
      }}>

        <img src={SearchIcon} className=" absolute left-2 bottom-2 :w-full h-auto cursor-pointer mb-2" alt="search" onClick={() => showAlert(text)} />
        <input type="text" value={text} onChange={e => onChangeHandeler(e.target.value)} name="search " className={`h-10 w-full flex rounded bg-gray-100 pl-10 pb-1  placeholder:text-black required:outline-0`} placeholder="Search" />

      </div>
      </div>

      <div className='flex flex-col absolute left-36 bg-white mt-16 w-1/2 md:w-1/3 cursor-pointer'>

        {suggestions && suggestions.slice(0, 10).map((suggestion, id) =>
          <div onClick={() => onSuggestHandler(suggestion.name, suggestion.id)



          }
            className='hover:bg-gray-200' key={id}   >
            {suggestion.name}
          </div>


        )}

      </div>




    </>
  )
}

export default Search;
