export default function time (date) {
  const hh = new Date(date).getHours()
  const mm = new Date(date).getMinutes()
  return `${hh < 10 ? '0' : ''}${hh}:${mm < 10 ? '0' : ''}${mm}`
}
