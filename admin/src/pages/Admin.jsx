import React from 'react'
import Sidebar from '../components/Sidebar'
import {Routes,Route} from 'react-router-dom'
import AddProduct from '../components/AddProduct'
import ListProduct from '../components/ListProduct'

export const Admin = () => {
  return (
    <div className='lg:flex '>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}></Route>
        <Route path='/listproduct' element={<ListProduct/>}></Route>
      </Routes>
    </div>
  )
}
