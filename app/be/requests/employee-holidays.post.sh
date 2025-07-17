#!/bin/bash
curl -i -s -X POST http://localhost:3000/employee-holidays \
  -H "Content-Type: application/json" \
  -d '{"start_date":"2024-07-01","end_date":"2024-07-10","description":"Summer vacation","employeeId":1}' 