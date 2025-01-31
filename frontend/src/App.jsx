import { BrowserRouter, Route, Routes } from "react-router";
import SchedulePage from '@components/Pages/schedule';
import EditSchedulePage from "@components/Pages/editSchedule";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SchedulePage />} />
        <Route path='/edit/:id' element={<EditSchedulePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
