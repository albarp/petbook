import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './App.css';
import { useEffect, useState } from 'react';
import type { EventInput } from '@fullcalendar/core';

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

  useEffect(() => {
    //TODO: move to call module
    fetch('http://localhost:3000/appointment/month?year=2024&month=6', {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiam9obiIsInNhbG9uSWQiOjEsImlhdCI6MTc1Mjg1MzY1NCwiZXhwIjoxNzUyODU0MjU0fQ.dL8VZx-PC3Qb46xhvdH7EM2WxO0eGPeNiRrvOnt9oxw',
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
  }, []);

  return (
    <div className="calendar-container">
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
