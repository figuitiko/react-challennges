import { useState } from 'react'
import { type NodeChild } from './utilTree'

export interface ChildProps {
  id: string
  text: string
  childrens: NodeChild[]
  handleAddChild: (childrens: NodeChild[], text: string) => void
}

const ChildTree: React.FC<ChildProps> = ({ id, text, childrens, handleAddChild }: ChildProps) => {
  const [isShow, setIsShow] = useState(false)
  const [value, setValue] = useState('')
  const handleOnBlur = (): void => {
    handleAddChild(childrens, value)
    setIsShow(!isShow)
  }
  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleAddChild(childrens, value)
      setIsShow(!isShow)
    }
  }
  return (
    <>
      <div className='flex gap-2'>
        <span>{text}</span>
        {
          !isShow
            ? <span className='cursor-pointer' onClick={(_) => { setIsShow(!isShow) }}>{'+'}</span>
            : <input className=' outline-dotted' type='texgt' value={value} onChange={(e) => { setValue(e.target.value) }} onBlur={handleOnBlur} onKeyDown={handleOnKeyDown}/>
        }
      </div>
    {
      <div className='flex flex-col ml-4'>
        {
        childrens?.map((child: NodeChild) => {
          if (child === null || child === undefined) return (<></>)
          return (
            <ChildTree key={crypto.randomUUID()} text={child.name} childrens={child.childrens} id={id} handleAddChild={handleAddChild} />
          )
        })
        }
      </div>
    }
    </>
  )
}

export default ChildTree
