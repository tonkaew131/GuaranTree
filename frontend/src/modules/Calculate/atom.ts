import { atom } from "jotai"

interface ICalculateAtom {
  size: number
  age: number
}
export const CalculateAtom = atom<ICalculateAtom>({
  size: 15,
  age: 7,
})
