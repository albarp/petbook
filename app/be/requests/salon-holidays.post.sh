#!/bin/bash
curl -i -s -X POST http://localhost:3000/salon-holidays \
  -H "Content-Type: application/json" \
  -d '{"start_date":"2024-08-01","end_date":"2024-08-05","description":"Renovation","salonId":1}' 