#!/bin/bash
curl -s -X POST http://localhost:3000/client \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","address":"456 Oak St","email":"john@example.com","phone":"555-6789","salonId":1}'