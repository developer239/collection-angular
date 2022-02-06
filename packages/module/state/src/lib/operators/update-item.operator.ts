import { StateOperator } from '@ngxs/store'
import { isStateOperator } from '@ngxs/store/operators'
import { Predicate, RepairType } from './types'
import { invalidIndex } from './utils'

export function updateItem<TItem>(
  selector: Predicate<TItem>,
  operatorOrValue: TItem
): StateOperator<RepairType<TItem>[]> {
  return function updateItemOperator(
    existing: Readonly<RepairType<TItem>[]>
  ): RepairType<TItem>[] {
    let index = -1

    index = existing.findIndex(selector)

    if (invalidIndex(index)) {
      return existing as RepairType<TItem>[]
    }

    let value: TItem = undefined!
    if (isStateOperator(operatorOrValue)) {
      value = operatorOrValue(existing[index] as Readonly<TItem>)
    } else {
      value = operatorOrValue
    }

    if (value === existing[index]) {
      return existing as RepairType<TItem>[]
    }

    const clone = existing.slice()
    clone[index] = value as RepairType<TItem>
    return clone
  }
}
