import React from 'react'
import { useItemImage } from '../hooks/useItemImage'



export const ItemImage = () => {

  const {imageHandler, imageUrl} = useItemImage()

  return(
    // <div className='item-image-wrapper'>
    <div className='item-image'>
      <input id='itemImg' type='file' accept=".png, .jpg, .jpeg .webp" onChange={imageHandler} />
      <label htmlFor='itemImg'>
        <img alt='item' src={imageUrl} />
      </label>
    </div>
    // </div>
  )
}



export default ItemImage