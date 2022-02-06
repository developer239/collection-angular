import { StateOperator } from '@ngxs/store'
import { Predicate, RepairType } from './types'
import { invalidIndex } from './utils'

export const removeItem =
  <TItem>(selector: Predicate<TItem>): StateOperator<RepairType<TItem>[]> =>
  (existing: Readonly<RepairType<TItem>[]>): RepairType<TItem>[] => {
    const index = existing.findIndex(selector)

    if (invalidIndex(index)) {
      return existing as RepairType<TItem>[]
    }

    const clone = existing.slice()
    clone.splice(index, 1)

    return clone
  }
