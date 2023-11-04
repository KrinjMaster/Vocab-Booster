import { writable, type Writable } from 'svelte/store'
import type { Words } from '../../types/Words'

export const useWords: Writable<Words> = writable({
  letters: [],
  isStarted: false,
})

export function addLetter(letter: string) {
  useWords.update((value) => ({
    ...value,
    letters: value.letters.push(letter),
  }))
}
