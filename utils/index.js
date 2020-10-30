import importAll from './import-all'
import readingTime from './reading-time'
import { formatDate } from './date'

function removeChar(string, spliter) {
  return string.split(spliter).join(' ')
}

export { importAll, formatDate, readingTime, removeChar }
