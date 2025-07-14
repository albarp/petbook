#!/bin/bash

curl -i -X GET \
  http://localhost:3000/employee \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiam9obiIsImlhdCI6MTc1MjUwMzE2OSwiZXhwIjoxNzUyNTAzMjI5fQ.vzhaGB4LCD3MfjdF7qg-qy7AOYKR5AbBE1BakF5qd-U" 