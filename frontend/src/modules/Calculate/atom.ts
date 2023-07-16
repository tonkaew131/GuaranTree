import { atom } from "jotai"

interface ICalculateAtom {
  size: number | null
  age: number | null
}
export const CalculateAtom = atom<ICalculateAtom>({
  size: 15,
  age: 7,
})
