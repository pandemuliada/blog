const days = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
]

const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
]

export function formatDate(stringDate) {
  const date = new Date(stringDate)
  const day = days[date.getDay()]
  const month = months[date.getMonth()]

  const fullDate = `${day}, ${date.getDate()} ${month} ${date.getFullYear()}`

  return fullDate
}