export function invalidIndex(index: number): boolean {
  return Number.isNaN(index) || index === -1
}
