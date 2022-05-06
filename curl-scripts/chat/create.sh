#!/bin/bash
BODY="THIS IS MY CHAT APP"
TOKEN="827fdac5de8b817e88dd567bec02daf9"

API="http://localhost:4741"
URL_PATH="/Chat"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "chat": {
      "body": "'"${BODY}}"'"
    }
  }'

echo
