#!/bin/bash
curl -i -s -X POST http://localhost:3000/salon-hours \
  -H "Content-Type: application/json" \
  -d '{"day_of_week":1,"open_time":"09:00","close_time":"18:00","salonId":1}' 