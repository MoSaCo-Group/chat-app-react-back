#!/bin/sh
# TOKEN="a4399f70f0420dc600cc071aad33e2af"
API="http://localhost:4741"
URL_PATH="/chat"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
