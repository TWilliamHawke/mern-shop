export const tfMeasure = (measure: string): string => {
  if(!measure) return ''
  return ` (${measure})`
}