import { useState } from 'react'

import { type NodeChild, root } from './utilTree'
import ChildTree from './ChildTree'

const Tree: React.FC = () => {
  const [tree, setTree] = useState<NodeChild>(root)
  const handleAddNode = (childrens: NodeChild[], value: string): void => {
    const newTree: NodeChild = {
      id: crypto.randomUUID(),
      name: value,
      childrens: []
    }
    childrens.push(newTree)
    setTree({ ...tree })
  }
  return (
    <div className='flex flex-col'>
      <ChildTree id={crypto.randomUUID()} text={tree.name} childrens={tree.childrens} handleAddChild={handleAddNode} />
    </div>
  )
}

export default Tree
