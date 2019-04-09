export interface ButtonConstructor {
  onlineService?: string
  locale: string
  type?: string
  color?: string
}

export default ({
  onlineService,
  locale,
  type,
  color
}: ButtonConstructor) => {
  if (!onlineService) onlineService = 'https://online.satispay.com'
  if (!type) type = 'pay'
  if (!color) color = 'red'
  return `${onlineService}/images/${locale}-${type}-${color}.svg`
}
