const fs = require('fs')


module.exports.changeLink = async function(oldImg, newImg, title) {
  if(!oldImg) return false

  if(oldImg !== 'images/no-image.png') {
    const oldImage = await this.findOne({linkedTo: title})
    if(!oldImage) return true
    const oldFile = oldImage.imageUrl.split('\\')[1]
    await fs.unlink(`src/images/${oldFile}`, err => {
      if(err) {
        console.log('image detelion failed')
        throw err
      }
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