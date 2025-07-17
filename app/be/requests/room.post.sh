#!/bin/bash
curl -i -s -X POST http://localhost:3000/room \
  -H "Content-Type: application/json" \
  -d '{"name":"Room A","capacity":2,"salonId":1}' 