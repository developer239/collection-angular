import { patch } from '@ngxs/store/operators'
import { updateItem } from './update-item.operator'

describe('[store][operators] updateItem', () => {
  describe('when same values provided', () => {
    it('it returns the same root', () => {
      const original = {
        items: [{ name: 'Mark' }, { name: 'Artur' }],
      }

      const newValue = patch({
        items: updateItem<{ name: string }>(
          (item) => item.name === 'Mark',
          patch({ name: 'Mark' })
        ),
      })(original)

      expect(newValue).toStrictEqual(original)
    })
  })

  describe('when different values provided', () => {
    describe('when predicate provided', () => {
      it('returns a new root', () => {
        const original = {
          items: [{ name: 'Artur' }],
        }

        const newValue = patch({
          items: updateItem((item) => item.name === 'Artur', { name: 'Mark' }),
        })(original)

        expect(newValue).toStrictEqual({
          items: [{ name: 'Mark' }],
        })
      })
    })

    describe('when operator provided', () => {
      it('returns a new root', () => {
        const original = {
          items: [{ name: 'Artur' }],
        }

        const newValue = patch({
          items: updateItem<{ name: string }>(
            (item) => item.name === 'Artur',
            patch({ name: 'Mark' })
          ),
        })(original)

        expect(newValue).toStrictEqual({
          items: [{ name: 'Mark' }],
        })
      })
    })
  })
})
