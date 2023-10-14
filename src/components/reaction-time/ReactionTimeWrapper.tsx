import { useEffect, useRef, useState } from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from '@uidotdev/usehooks'

const ReactionTimeWrapper: React.FC = () => {
  const [reactionTime, setReactionTime] = useState<number>(0)
  const [isStart, setIsStart] = useState<boolean>(false)
  const [isShow, setIsShow] = useState<boolean>(false)
  const [isClick, setIsClick] = useState<boolean>(false)
  const [isClickTooSoon, setIsClickTooSoon] = useState<boolean>(false)
  const [youWin, setYouWin] = useState<boolean>(false)
  const refTime = useRef<number>(0)
  const size = useWindowSize()

  useEffect(() => {
    if (isStart) {
      const timeout = setTimeout(() => {
        setIsShow(true)
        refTime.current = Date.now()
      }, 1000)
      return () => {
        clearTimeout(timeout)
      }
    } else {
      setIsShow(false)
    }
  }, [isStart])

  useEffect(() => {
    if (isClick && isShow) {
      setReactionTime(Date.now() - refTime.current)
      setIsStart(false)
      setIsClick(false)
      setIsClickTooSoon(false)
      setYouWin(true)
    } else if (isClick && !isShow) {
      setIsStart(false)
      setIsClick(false)
      setIsClickTooSoon(true)
      const timeout = setTimeout(() => {
        setIsClickTooSoon(false)
      }, 1000)
      return () => {
        clearTimeout(timeout)
      }
    }
    const timeout = setTimeout(() => {
      setYouWin(false)
    }, 3000)
    const timeout1 = setTimeout(() => {
      setIsClickTooSoon(false)
    }, 1000)
    return () => {
      clearTimeout(timeout)
      clearTimeout(timeout1)
    }
  }, [isClick, isShow])
  const handleGame = (): void => {
    setIsClick(true)
  }
  const handleStart = (): void => {
    setIsStart(true)
    setYouWin(false)
    setIsClickTooSoon(false)
  }
  return (
    <div className='flex flex-col gap-4'>
      {
        !isStart
          ? <button className='bg-slate-600 text-white' onClick={handleStart}>Start game</button>
          : <div className={`w-[200px] h-[200px] ${isShow ? 'bg-green-400' : 'bg-red-500'} cursor-pointer`} onClick={handleGame} />
      }
      {
        isClickTooSoon && <span className='text-red-500'>You clicked too soon</span>
      }
      {
        youWin && (
          <div className='flex'>
            <Confetti
              width={size.width ?? 900}
              height={size.height ?? 900} />
            <span className='text-green-400'>Your reaction time is {reactionTime}</span>
          </div>
        )
      }

    </div>
  )
}

export default ReactionTimeWrapper
