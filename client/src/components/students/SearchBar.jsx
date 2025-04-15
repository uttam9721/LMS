import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({data}) => {

  const navigate=useNavigate();
  const [input,setInput] = useState(data ? data :'');

  const onSearchHandler=(e)=>{
    e.preventDefault()
    navigate('/course-list/'+input)
  }



  return (

    <>
     <form onSubmit={onSearchHandler}
     className="max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded">
  <img
    src={assets.search_icon}
    alt="search_icon"
    className="md:w-auto w-10 px-3"
  />
  <input
  onChange={e=>setInput(e.target.value)} value={input}
    type="text"
    placeholder="Search for courses"
    className="w-full h-full outline-none text-gray-500/80"
  />
  <button
    type="submit"
    className="bg-blue-600 rounded text-white md:px-10 px-7 md:py-3 py-1 mx-1"
    style={{'height':'50px'}}
  >
    Search
  </button>
</form>

{/* <form 
  onSubmit={onSearchHandler}
  className="max-w-xl w-full h-12 md:h-14 flex items-center bg-white border border-gray-300 rounded overflow-hidden"
>
  <img
    src={assets.search_icon}
    alt="Search"
    className="w-5 h-5 ml-3 mr-2"
  />
  <input
    type="text"
    placeholder="Search for courses"
    value={input}
    onChange={e => setInput(e.target.value)}
    className="flex-1 h-full text-gray-700 placeholder-gray-400 outline-none"
  />
  <button
    type="submit"
    className="bg-blue-600 text-white font-medium px-6 md:px-8 h-full"
  >
    Search
  </button>
</form> */}

    </>
  )
}

export default SearchBar
