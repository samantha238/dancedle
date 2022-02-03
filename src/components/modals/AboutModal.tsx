import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is a Dancing with the Stars themed clone of a word guessing game, developed by{' '}
        <a
          href="https://www.hannahmariepark.com/"
          className="underline font-bold"
        >
          Hannah Park
        </a>{' '}
        and modified by{' '}
        <a
          href="https://twitter.com/berstcns"
          className="underline font-bold"
        >
          Samantha Perez
        </a>{' '}
        - view Hannah's{' '}
        <a
          href="https://github.com/hannahcode/word-guessing-game"
          className="underline font-bold"
        >
          open source code here
        </a>.
      </p>
      <br></br>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        All words are DWTS related, ranging from dance styles to professional dancer / celebrity 
        names to random DWTS terms. Enjoy!😁
      </p>
    </BaseModal>
  )
}
