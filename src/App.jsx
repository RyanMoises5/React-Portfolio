import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './utils/ThemeContext.jsx'

function App() {
  return (
    <>
      <div>
        <ThemeProvider>
          <Outlet />
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
