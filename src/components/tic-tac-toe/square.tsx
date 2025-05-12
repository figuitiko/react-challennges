import { type itemVal } from './types'

interface Props {
  value: itemVal
  onClick: (item: itemVal) => void
}
export const Square: React.FC<Props> = ({ value, onClick }: Props) => {
  return (
   <div className="border-2 border-black aspect-square w-12 flex items-center justify-center" onClick={() => { onClick(value) }}>
    {
       value != null && value
    }
   </div>
  )
}
