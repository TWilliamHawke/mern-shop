const {Schema, model, Types} = require('mongoose')

const categorySchema = new Schema({
  name: {type: String},
  path: {type: String},
  minValue: { type: Number, default: 0},
  maxValue: { type: Number, default: 0},
  fields: [
    {
        type: Types.ObjectId, ref: 'Field'
    }
  ],
  brands: [
    {
      type: String,
    }
  ]
})

categorySchema.statics.setMinMax = async function(path, price) {
  const cat = await this.findOne({path})
  cat.minValue = cat.minValue === 0 ? price : Math.min(cat.minValue, price)
  cat.maxValue = Math.max(cat.maxValue, price)
  await cat.save()
}

module.exports = model('Categories', categorySchema)