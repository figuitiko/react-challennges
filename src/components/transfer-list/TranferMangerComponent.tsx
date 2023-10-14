import { DIRECTIONS } from '../../const'

interface Props {
  handleTransfer: (go: string) => void
  leftItems: number[]
  rightItems: number[]
  selectedItems: number[]
}
const TranferMangerComponent: React.FC<Props> = ({ handleTransfer, leftItems, rightItems, selectedItems }: Props) => {
  const isSelectedILeft = selectedItems.some((item) => leftItems.includes(item))
  const isSelectedIRight = selectedItems.some((item) => rightItems.includes(item))
  return (
    <div className='h-[200px] p-8 flex flex-col items-center justify-center gap-2'>
    {
      leftItems.length > 0 && <span className='border px-4 py-2 rounded-xl cursor-pointer min-w-[40px] min-h-[36px]' onClick = {() => { handleTransfer(DIRECTIONS.RIGHT) }}>{selectedItems.length > 0 && isSelectedILeft ? '>' : ''}</span>
    }
    {
      rightItems.length > 0 && <span className='border px-4 py-2 rounded-xl cursor-pointer min-w-[40px] min-h-[36px]' onClick={() => { handleTransfer(DIRECTIONS.LEFT) }}>{selectedItems.length > 0 && isSelectedIRight ? '<' : ''}</span>
    }
  </div>
  )
}

export default TranferMangerComponent
