#!/bin/bash
curl -i -s -X POST http://localhost:3000/employee-service \
  -H "Content-Type: application/json" \
  -d '{"employeeId":1,"serviceId":1}' 