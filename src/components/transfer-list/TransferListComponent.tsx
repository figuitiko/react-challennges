import { useState } from 'react'
import ListItemsComponent from './ListItemsComponent'
import TranferMangerComponent from './TranferMangerComponent'
import { DIRECTIONS } from '../../const'

const TransferListComponent: React.FC = () => {
  const [leftItems, setLefItems] = useState<number[]>([1, 2, 3, 4])
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [rightItems, setRightItems] = useState<number[]>([])
  const handleSelected = () => (item: number, isChecked: boolean): void => {
    let newItems = []
    if (isChecked) {
      console.log('selected')
      newItems = selectedItems.filter((selectedItem) => selectedItem !== item).sort((a, b) => (a - b))
      setSelectedItems([...newItems])
      return
    }
    console.log('unselected')
    newItems = [...selectedItems, item].sort((a, b) => (a - b))
    setSelectedItems([...newItems])
  }
  const handleTransfer = (go: string): void => {
    if (go === DIRECTIONS.LEFT) {
      setRightItems([...rightItems.filter((item) => !selectedItems.includes(item) && !leftItems.includes(item))])
      setLefItems([...leftItems, ...selectedItems.filter(item => !leftItems.includes(item))].sort((a, b) => (a - b)))
    } else {
      setLefItems([...leftItems.filter((item) => !selectedItems.includes(item) && !rightItems.includes(item))])
      setRightItems([...rightItems, ...selectedItems.filter(item => !rightItems.includes(item))].sort((a, b) => (a - b)))
    }
    setSelectedItems([])
  }
  return (
    <main className='flex'>
      <ListItemsComponent items={leftItems} handleSelected={handleSelected()} selectedItems={selectedItems} />
      <TranferMangerComponent selectedItems = {selectedItems} leftItems={leftItems} rightItems={rightItems} handleTransfer={handleTransfer} />
      <ListItemsComponent items={rightItems} handleSelected={handleSelected()} selectedItems={selectedItems} />
    </main>
  )
}

export default TransferListComponent
