#!/bin/bash
curl -i -s -X POST http://localhost:3000/appointment \
  -H "Content-Type: application/json" \
  -d '{"start_time":"2024-06-01T10:00:00Z","end_time":"2024-06-01T11:00:00Z","status":"confirmed","notes":"First visit","salonId":1,"petId":1,"serviceId":1,"employeeId":1,"roomId":1}' 