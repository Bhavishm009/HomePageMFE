import React, { useState } from 'react'
import Menu from './Constdata/menuApi'
import BuyCard from './components/views/ProductCard/BuyCard'
import Navbar from './Navbar'

const uniqueList = [...new Set(Menu.map((curElem) => {
  return curElem.category;
})
), 'All'];
console.log(uniqueList)
const Category = () => {
  const [menuData, setMenuData] = useState(Menu)
  const [menuList, setMenuList] = useState(uniqueList)


  const filterItem = (category) => {
    if (category === 'All') {
      setMenuData(Menu)
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList)
  }

  return (
    <>
      <BuyCard menuData={menuData} />
    </>
  )
}

export default Category
