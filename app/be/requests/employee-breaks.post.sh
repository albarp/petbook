#!/bin/bash
curl -i -s -X POST http://localhost:3000/employee-breaks \
  -H "Content-Type: application/json" \
  -d '{"day_of_week":1,"start_time":"12:00","end_time":"13:00","description":"Lunch","employeeId":1}' 