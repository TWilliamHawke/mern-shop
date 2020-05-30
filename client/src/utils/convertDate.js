export const convertDate = date => {
  const d = new Date(date)
  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  
  return d.toLocaleString("en-EN", options)
}