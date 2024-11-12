import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Create from "./pages/Create"
import Detail from "./pages/Detail"
import Edit from "./pages/Edit"

const App = () => {
  const [notes, setNotes] = useState([])
  const [tags, setTags] = useState([])
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true,  v7_startTransition: true, }}>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/new" element={<Create/>} />
      <Route path="/note/:id" element={<Detail/>} />
      <Route path="/note/:id/edit" element={<Edit/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App