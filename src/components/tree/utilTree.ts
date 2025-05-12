type cryptoId = `${string}-${string}-${string}-${string}-${string}`
export interface NodeChild {
  id: cryptoId
  name: string
  childrens: NodeChild[]
}

export const root: NodeChild = {
  id: crypto.randomUUID(),
  name: 'root',
  childrens: [
    {
      id: crypto.randomUUID(),
      name: 'child1',
      childrens: [
        {
          id: crypto.randomUUID(),
          name: 'child1-1',
          childrens: []
        },
        {
          id: crypto.randomUUID(),
          name: 'child1-2',
          childrens: []
        }
      ]
    },
    {
      id: crypto.randomUUID(),
      name: 'child2',
      childrens: [
        {
          id: crypto.randomUUID(),
          name: 'child2-1',
          childrens: []
        },
        {
          id: crypto.randomUUID(),
          name: 'child2-2',
          childrens: []
        }
      ]
    }
  ]
}
// export const data =
