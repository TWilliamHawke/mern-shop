import React from 'react'
import { connect } from 'react-redux'
import { loadImage } from 'src/redux/itemSaga/actions'



const ItemImage = ({imageUrl, loadImage}) => {

  const imageHandler = e => {
    const file = e.target.files[0]
    if(!file) return
    const formData = new FormData();
    formData.append('itemImg', file)
    loadImage(formData)
  }

  return(
    <div className='item-image'>
      <input id='itemImg' type='file' accept=".png, .jpg, .jpeg" onChange={imageHandler} />
      <label htmlFor='itemImg'>
        <img alt='item' src={imageUrl} />
      </label>
    </div>
  )
}

const mapStateToProps = ({item: {imageUrl}}) => ({
  imageUrl,
})


export default connect(mapStateToProps, {loadImage})(ItemImage)