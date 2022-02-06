export type RepairType<TItem> = TItem extends true
  ? boolean
  : TItem extends false
  ? boolean
  : TItem

export type Predicate<TItem = any> = (
  value: RepairType<TItem> | Readonly<RepairType<TItem>>
) => boolean
