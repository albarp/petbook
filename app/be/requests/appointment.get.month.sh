curl -X GET \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiam9obiIsInNhbG9uSWQiOjEsImlhdCI6MTc1Mjg1MzY1NCwiZXhwIjoxNzUyODU0MjU0fQ.dL8VZx-PC3Qb46xhvdH7EM2WxO0eGPeNiRrvOnt9oxw" \
  "http://localhost:3000/appointment/month?year=2024&month=6" | jq .