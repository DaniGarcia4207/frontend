import React from 'react'
import Cards from './Cards'
import data from './data'

export default function CardList() {
  const cards = data.map(items => {
    return(
        <Cards key = {items.id} items = {items}></Cards>
    )
  })
  return (
    <div>
       <div className='divCards'>
            {cards}
       </div>
    </div>
  )
}
