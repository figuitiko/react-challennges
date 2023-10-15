import { useState } from 'react'
import { animalData } from './data'
import { flushSync } from 'react-dom'

const LabelFilter: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<string[]>([])
  const animalClass = Array.from(new Set(animalData.map(animal => animal.class)))
  const filteredAnimals = selectedClass.length === 0 ? animalData : animalData.filter(animal => selectedClass?.includes(animal.class))
  const handleClassAnimal = (item: string): void => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    document.startViewTransition(() => {
      flushSync(() => {
        if (selectedClass.includes(item)) {
          setSelectedClass(selectedClass.filter(animal => animal !== item))
        } else {
          setSelectedClass([...selectedClass, item])
        }
      })
    })
  }
  return (
    <div className='flex  flex-col items-center w-1/3 h-[564px]'>
      <div className='flex gap-2 w-full justify-center'>
        {
          animalClass.map(item => (
            <div key={item} className={`border-2 px-4 py-2 rounded-md cursor-pointer boder-black ${selectedClass.includes(item) && 'bg-black text-white'}`} onClick={() => { handleClassAnimal(item) }}>
              <span>{item}</span>
            </div>
          ))
        }
      </div>
      <div className='flex flex-wrap items-start  justify-center gap-2 mt-4 w-full'>
        {
          filteredAnimals.map(animal => (
            <div style={{ viewTransitionName: `card-${animal.name}` }} key={animal.name} className='flex justify-center px-8 py-12  bg-black text-white w-1/4'>
              <span>
                {
                  animal.name
                }
              </span>
            </div>
          ))
        }

      </div>

    </div>
  )
}

export default LabelFilter
