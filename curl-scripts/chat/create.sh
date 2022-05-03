#!/bin/bash
# NAME="Colin"
# MESSAGE="THIS IS MY CHAT APP"
# TOKEN="a4399f70f0420dc600cc071aad33e2af"

API="http://localhost:4741"
URL_PATH="/chat"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "chat": {
      "name": "'"${NAME}"'",
      "message": "'"${MESSAGE}"'"
    }
  }'

echo
