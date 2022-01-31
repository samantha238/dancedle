import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { WORDLE_TITLE } from '../constants/strings'

export const shareStatus = (guesses: string[], lost: boolean) => {
  navigator.clipboard.writeText(
    `${WORDLE_TITLE} ${solutionIndex} ${lost ? 'X' : guesses.length}/6\n\n` +
      generateEmojiGrid(guesses)
  )
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .split('')
        .map((letter, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩'
            case 'present':
              return '🟨'
            default:
              //return localStorage.getItem('theme') === 'light' ? '⬜' : '⬛'
              return '⬛'
          }
        })
        .join('')
    })
    .join('\n')
}