#!/bin/bash

curl -i -X POST \
  http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "john", "password": "changeme"}'