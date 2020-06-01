const {Schema, model, Types} = require('mongoose')

const filterSchema = new Schema({
  catName: {type: String, required: true},
  field: {type: Types.ObjectId, ref: 'Field', required: true},
  value: {type: String, required: true}
})

filterSchema.statics.createFilters = async function(fieldsArray, catName) {
  try {

    const existFilters = await this.find({catName})

    const checkExist = (item, array) => {
      let match = false
      for(exist of array) {
        if(exist.value == item.value && exist.field == item.field) {
          match = true
          break
        }
      }
      return match
    }

    fieldsArray
      .filter(filter => !checkExist(filter, existFilters))
      .forEach(async ({field, value}) => {
        const newFilter = new this({field, value, catName})
        existFilters.push(newFilter)
        await newFilter.save()
      })

    const itemFilters = existFilters
        .filter(filter => checkExist(filter, fieldsArray))
        .map(filter => filter._id)

    return itemFilters
  
  } catch(e) {
    throw e
  }
}



module.exports = model('Filter', filterSchema)