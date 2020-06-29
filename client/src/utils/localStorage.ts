export const storage = {
  getItem: <T>(field: string): T | null => {
    const string = localStorage.getItem(field)
    if(!string) return null

    return JSON.parse(string)
  },

  setItem: <T>(field: string, data: T): void => {
    const string = JSON.stringify(data)
    localStorage.setItem(field, string)
  },

  removeItem: (field: string): void => {
    localStorage.removeItem(field)
  }
}
