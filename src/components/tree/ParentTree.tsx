import { type ChildProps } from './ChildTree'

interface ParentProps {
  children: React.ReactNode
  childs: ChildProps[]
}
const ParentTree: React.FC<ParentProps> = ({ children, childs }: ParentProps) => {
  return (
    <div className='flex flex-col'>
    {
      children
    }

    </div>
  )
}

export default ParentTree
