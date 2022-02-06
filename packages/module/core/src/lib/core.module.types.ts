export type ArrayElement<TArrayType extends readonly unknown[]> =
  TArrayType extends readonly (infer TElementType)[] ? TElementType : never
