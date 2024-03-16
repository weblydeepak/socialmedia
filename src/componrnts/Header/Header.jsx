import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Home, HomeOutlined,
        Add,AddOutlined,
        Search,SearchOutlined,
        AccountCircle,AccountCircleOutlined } from '@mui/icons-material'
const Header = () => {
    const [tab, setTab] = useState("/")
  return (
    <div className='Header flex justify-center items-center'>
      <Link className='w-[2vmax] h-[2vmax] my-[1vmax] mx-[4vmax]' to="/" onClick={()=>setTab("/")} > 
       {tab=== "/" ? <Home className='text-[2vmax] transition-all duration-75 text-black' />:<HomeOutlined/>}
       </Link>

      <Link  className='w-[2vmax] h-[2vmax] my-[1vmax] mx-[4vmax]' to="/" onClick={()=>setTab("/newpost")} > 
      {tab === "/newpost" ? <Add className='text-[2vmax] transition-all duration-75 text-black'  />:<AddOutlined/>}
       </Link>

      <Link  className='w-[2vmax] h-[2vmax] my-[1vmax] mx-[4vmax]' to="/" onClick={()=>setTab("/search")} > 
      {tab === "/search" ? <Search className='text-[3vmax] transition-all duration-75 text-black'  />:<SearchOutlined/>}
       </Link>

      <Link  className='w-[2vmax] h-[2vmax] my-[1vmax] mx-[4vmax]'  to="/" onClick={()=>setTab("/account")} > 
      {tab === "/account" ? <AccountCircle className='text-[2vmax] transition-all duration-75 text-black'  /> : <AccountCircleOutlined/>}
       </Link>
    </div>
  )
}

export default Header
