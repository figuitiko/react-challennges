import { useState } from 'react'
import { Square } from './square'
import { type itemVal } from './types'
import { isWinner } from './util'

export const Board: React.FC = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isX, setIsX] = useState(Math.random() >= 0.5)
  const [winner, setWinner] = useState<itemVal>(null)

  const handleClick = (val: itemVal, idx: number): void => {
    const newSquares = [...squares]
    if (val !== null || isWinner(squares) !== null) {
      return
    }
    newSquares[idx] = isX ? 'x' : '0'
    setSquares(newSquares)
    setIsX(!isX)
    const winner = isWinner(newSquares)
    if (winner !== null) {
      setWinner(winner)
      setTimeout(() => {
        setSquares(Array(9).fill(null))
        setWinner(null)
        setIsX(false)
      }, 3000)
    }
  }

  return (
    <>
    {
        winner !== null && (
          <p> The winner is {winner}</p>
        )
      }
    <div className='grid grid-cols-3'>

      {
        squares.map((item, idx) => (
          <Square key={idx} value={item} onClick={ (val) => { handleClick(val, idx) }} />
        ))
      }
    </div>
    </>
  )
}
