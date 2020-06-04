const{ Schema, model, Types } = require('mongoose')
const fs = require('fs')

const ImageSchema = new Schema({
  imageUrl: {
    type: String,
    required: true
  },
  linkedTo: {
    type: String
  }
})

ImageSchema.statics.setLink = async function(id, title) {
  if(!id) return false      
  const image = await this.findById(id)
  if(!image) return true
  image.linkedTo = title
  await image.save()
  return false
}

ImageSchema.statics.changeLink = async function(oldImg, newImg, title) {
  if(!oldImg) return false

  if(oldImg !== 'images/no-image.png') {
    const oldImage = await this.findOne({linkedTo: title})
    if(!oldImage) return true
    const oldFile = oldImage.imageUrl.split('\\')[1]
    await fs.unlink(`images/${oldFile}`, err => {
      if(err) throw err
    })
    await this.deleteOne({linkedTo: title})
  }

  return this.setLink(newImg, title)

  // const image = await Image.findById(newImg)
  // if(!image) return true
  // image.linkedTo = title
  // await image.save()
  // return false
}

module.exports = model('Image', ImageSchema)