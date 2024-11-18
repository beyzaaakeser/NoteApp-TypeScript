import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Create from './pages/Create';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import { Note, NoteData, Tag } from './types';
import { v4 } from 'uuid';
import { useLocalStorage } from '@uidotdev/usehooks';
import Layout from './components/layout/Layout';
const App = () => {
  const [notes, setNotes] = useLocalStorage<Note[]>('NOTES', []);
  const [tags, setTags] = useLocalStorage<Tag[]>('TAGS', []);

  const createTag = (newTag: Tag): void => {
    setTags((prev) => [...prev, newTag]);
  };

  const createNote = (data: NoteData): void => {
    const newNote: Note = { id: v4(), ...data };

    setNotes((prev) => [...prev, newNote]);
  };

  console.log(notes);

  return (
    <BrowserRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <Routes>
        <Route path="/" element={<Main notes={notes} availableTags={tags} />} />
        <Route
          path="/new"
          element={
            <Create
              createTag={createTag}
              handleSubmit={createNote}
              availableTags={tags}
            />
          }
        />

        <Route path="/note/:id" element={<Layout notes={notes} />}>
          <Route index element={<Detail />} />
          <Route path="edit" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
