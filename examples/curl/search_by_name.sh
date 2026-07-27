#!/bin/bash

RAPIDAPI_KEY="YOUR_RAPIDAPI_KEY"

curl -X GET \
  "https://security-guard-license-verification.p.rapidapi.com/verify/name?state=NY&last_name=Smith&first_name=John&limit=10" \
  -H "X-RapidAPI-Key: $RAPIDAPI_KEY" \
  -H "X-RapidAPI-Host: security-guard-license-verification.p.rapidapi.com"
