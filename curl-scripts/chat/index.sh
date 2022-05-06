#!/bin/sh
TOKEN="39711a005019782111766a551ec9688a"

API="http://localhost:4741"
URL_PATH="/chat"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
