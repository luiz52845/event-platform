import { Route, Routes } from 'react-router-dom'
import { Event } from './pages/Evento';
import { Subscribe } from './pages/Subscribe';
export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Subscribe />}></Route>
            <Route path="/event" element={<Event />}></Route>
            <Route path="/event/lesson/:slug" element={<Event />}></Route>
        </Routes>

    );
}