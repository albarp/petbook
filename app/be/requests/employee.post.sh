#!/bin/bash
curl -i -s -X POST http://localhost:3000/employee \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Smith","email":"jane@example.com","phone":"555-9876","salonId":1}' 