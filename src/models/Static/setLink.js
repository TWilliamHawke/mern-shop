module.exports.setLink = async function(id, title) {
  if(!id) return false;
  
  const image = await this.findById(id);
  if(!image) return true;

  image.linkedTo = title;
  await image.save();
  return false;
}