#!/bin/bash
curl -i -s -X POST http://localhost:3000/appointment-equipment \
  -H "Content-Type: application/json" \
  -d '{"appointmentId":1,"equipmentId":1}' 