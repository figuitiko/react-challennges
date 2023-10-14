import Navigation from './components/share/Navigation'
import RoutesComponent from './routes/RoutesComponent'

function App (): JSX.Element {
  return (
    <>
      <Navigation />
      <main className='flex w-screen h-screen justify-center items-center'>
        <RoutesComponent />
      </main>
    </>
  )
}

export default App
