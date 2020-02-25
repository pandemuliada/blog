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
  const day = days[date.getDay()]
  const month = months[date.getMonth()]

  const fullDate = `${day}, ${month} ${date.getDate()} ${date.getFullYear()}`

  return fullDate
}