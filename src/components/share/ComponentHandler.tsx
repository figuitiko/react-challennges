import { useParams } from 'react-router-dom'
import { components } from '../index'

const ComponentHandler: React.FC = () => {
  const params = useParams()
  const { component } = params
  if (component === undefined) {
    return (
      <div>Component not found</div>
    )
  }
  const Component = components[component as keyof typeof components]
  return (
    <>
      <Component />
    </>
  )
}

export default ComponentHandler
