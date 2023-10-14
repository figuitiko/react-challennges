interface Props {
  items?: number[]
  handleSelected: (item: number, isChecked: boolean) => void
  selectedItems?: number[]
}
const ListItemsComponent: React.FC<Props> = ({ items, handleSelected, selectedItems }: Props) => {
  return (
    <div className='flex flex-col border p-8 rounded-xl items-center justify-center h-[200px] w-[100px]'>
      {
        items?.map((item) => {
          const isChecked: boolean = selectedItems?.includes(item) ?? false
          return (
            <div key={item} className='flex items-center gap-2'>
              <input type='checkbox' checked={isChecked} onChange={() => { handleSelected(item, isChecked) }} />
              <span>{item}</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default ListItemsComponent
