export const convertDate = (date: Date): string => {
  const d = new Date(date)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  
  return d.toLocaleString("en-EN", options)
}