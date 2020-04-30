
class Storage {
  getItem = field => {
    const string = localStorage.getItem(field)
    if(!string) return null

    return JSON.parse(string)
  }

  setItem = (field, data) => {
    const string = JSON.stringify(data)
    localStorage.setItem(field, string)
  }

  removeItem = field => {
    localStorage.removeItem(field)
  }
}

const storage = new Storage()

export default storage