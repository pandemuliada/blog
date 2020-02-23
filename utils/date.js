const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

export function formatDate(stringDate) {
  const date = new Date(stringDate)
    
  let day, month
  
  // get day
  for (let index = 0; index < days.length; index++) {
    if (index == date.getDay()) {
      day = days[index]
      break
    }
  }
  
  // get month
  for (let index = 0; index < months.length; index++) {
    if (index == date.getMonth()) {
      month = months[index]
      break
    }
  }

  const fullDate = `${day}, ${month} ${date.getDate()} ${date.getFullYear()}`

  return fullDate
}