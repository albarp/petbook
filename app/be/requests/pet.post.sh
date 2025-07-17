#!/bin/bash
curl -s -X POST http://localhost:3000/pet \
  -H "Content-Type: application/json" \
  -d '{"name":"Fido","breed":"Labrador","age":3,"notes":"Friendly","clientId":1}' 