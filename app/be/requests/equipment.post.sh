#!/bin/bash
curl -i -s -X POST http://localhost:3000/equipment \
  -H "Content-Type: application/json" \
  -d '{"name":"Dryer","salonId":1}' 