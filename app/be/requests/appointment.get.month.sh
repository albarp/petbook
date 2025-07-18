curl -X GET \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiam9obiIsInNhbG9uSWQiOjEsImlhdCI6MTc1MjgyNjcxMywiZXhwIjoxNzUyODI2NzczfQ.l3b3zep5a5zklTGun8-s2YRu7lOgD2HNBMGgOHtpszY" \
  "http://localhost:3000/appointment/month?year=2024&month=6" | jq .