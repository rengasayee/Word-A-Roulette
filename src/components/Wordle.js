import { useEffect } from "react"
import useWordle from "../hooks/useWordle"
import Grid from "./Grid"
import Keypad from "./KeyPad"

export default function Wordle({ solution }){
    const { currentGuess, handleKeyup, guesses, isCorrect, usedKeys, turn} = useWordle(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        if (isCorrect) {
            console.log('You have WON !!')
            window.removeEventListener('keyup', handleKeyup)
        }

        if (turn > 5) {
            console.log('You are out of guesses !!')
            window.removeEventListener('keyup', handleKeyup)
        }
        return () => window.removeEventListener('keyup', handleKeyup)

    }, [handleKeyup, isCorrect, turn])

    // useEffect(() => {
    //     console.log(guesses, turn, isCorrect)
    // }, [guesses, turn, isCorrect])

    return (
        // <div>Wordle</div>

        <div>
            <div>Solution - {solution}</div>
            <div>CurrentGuess is: {currentGuess}</div>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
            <Keypad usedKeys={usedKeys}/>
        </div>
    )
}