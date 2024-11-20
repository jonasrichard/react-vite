import { Route, Routes } from "react-router-dom"
import { SidebarTrigger } from "./components/ui/sidebar"
import SidebarNav from "./scenes/global/SidebarNav"
import Events from "./scenes/events/Events"
import Home from "./scenes/home/home"

function App() {
  return (
    <div id="container" className="flex m-1 mx-auto h-full w-full">
      <SidebarNav />
      <div id="content">
        <SidebarTrigger />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Events />} path="/events" />
        </Routes>
      </div>
    </div>
  )
}

export default App
