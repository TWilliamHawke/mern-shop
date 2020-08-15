const fs = require('fs')
const Image = require('../../models/Image')


const postImage = async(req, res) => {
  try {
    const img = `images\\${req.file.filename}`
    const images = await Image.find({linkedTo: {$exists: false}})

    await images.map(({imageUrl}) => imageUrl.split('\\')[1])
      .forEach(async file => {
        await fs.unlink(`src/images/${file}`, err => {
          if(err) throw err
        })
        console.log(file, 'has been deleted')
      })

    await Image.deleteMany({linkedTo: {$exists: false}})

    const image = new Image({
      imageUrl: img
    })
    await image.save()

    res.json({img, id: image._id})
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Server error'})
  }
}

module.exports = {postImage}