#!/bin/bash
curl -i -s -X POST http://localhost:3000/service \
  -H "Content-Type: application/json" \
  -d '{"name":"Bath","description":"Dog bath","price":25.00,"duration_minutes":30,"salonId":1}' 