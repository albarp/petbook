import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './App.css';
import { useEffect, useState } from 'react';
import type { EventInput } from '@fullcalendar/core';
import Login from './Login';

type Appointment = {
  id: number;
  start_time: string;
  end_time: string;
  status?: string | null;
  notes?: string | null;
  pet?: { name: string };
};

function App() {
  const [events, setEvents] = useState<EventInput[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('token'));
  const API_BASE = import.meta.env.VITE_API_BASE;

  useEffect(() => {
    if (!isLoggedIn) return;
    const token = localStorage.getItem('token');
    fetch(`${API_BASE}/appointment/month?year=2024&month=6`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then((data: Appointment[]) => {
        setEvents(
          data.map((a) => ({
            title: a.pet?.name || 'Appointment',
            start: a.start_time,
            end: a.end_time,
            extendedProps: a,
          }) as EventInput)
        );
      });
  }, [isLoggedIn]);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setEvents([]);
  };

  if (!isLoggedIn) return <Login onLogin={handleLogin} />;

  return (
    <div className="calendar-container">
      <button onClick={handleLogout} style={{ float: 'right' }}>Logout</button>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        height="auto"
        initialDate="2024-06-01"
      />
    </div>
  );
}

export default App;
