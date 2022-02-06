import { patch } from '@ngxs/store/operators'
import { removeItem } from './remove-item.operator'

describe('[store][operators] removeItem', () => {
  it('returns a new root without item if predicate provided', () => {
    const original = {
      items: [1, 2, 3],
    }

    const newValue = patch({
      items: removeItem((number) => number === 1),
    })(original)

    expect(newValue).toStrictEqual({
      items: [2, 3],
    })
  })

  describe('when object with nested patch operators provided', () => {
    describe('when nesting multiple levels deep', () => {
      it('returns the deeply patched object', () => {
        interface IPerson {
          name: string
          lastName?: string
          nickname?: string
        }

        interface IGreeting {
          enthusiastic?: boolean
          person: IPerson
        }

        interface IStateModel {
          items: number[]
          otherItems: {
            hello?: IGreeting[]
            goodbye?: IGreeting[]
            greeting?: string[]
          }
        }

        const original: IStateModel = {
          items: [1, 2, 3, 4, 5],
          otherItems: {
            hello: [
              {
                person: {
                  name: 'you',
                },
              },
              {
                person: {
                  name: 'YOU',
                },
              },
            ],
            goodbye: [
              {
                person: {
                  name: 'Mark',
                },
              },
              {
                person: {
                  name: 'Artur',
                },
              },
            ],
          },
        }

        const newValue = patch<IStateModel>({
          items: removeItem((number) => number === 5),
          otherItems: patch({
            hello: removeItem<IGreeting>(
              (greeting) => greeting.person.name === 'YOU'
            ),
            goodbye: removeItem<IGreeting>(
              (greeting) => greeting.person.name === 'Artur'
            ),
          }),
        })(original)

        expect(newValue).toStrictEqual({
          items: [1, 2, 3, 4],
          otherItems: {
            hello: [
              {
                person: {
                  name: 'you',
                },
              },
            ],
            goodbye: [
              {
                person: {
                  name: 'Mark',
                },
              },
            ],
          },
        })
      })
    })
  })
})
