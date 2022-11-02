export function clsx(obj: { [key: string]: any }) {
  let k,
    cls = ''
  for (k in obj) {
    if (obj[k]) {
      cls && (cls += ' ')
      cls += k
    }
  }
  return cls
}
