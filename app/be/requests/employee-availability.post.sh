#!/bin/bash
curl -i -s -X POST http://localhost:3000/employee-availability \
  -H "Content-Type: application/json" \
  -d '{"day_of_week":1,"start_time":"09:00","end_time":"17:00","employeeId":1}' 