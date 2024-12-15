export const strToMath = str =>
  str.replaceAll(' ', '')
  .replaceAll('+', ' + ')
  .replaceAll('-', ' - ')
  .replaceAll('*', ' * ')
  .replaceAll('/', ' / ')
