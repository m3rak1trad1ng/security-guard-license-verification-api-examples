#!/bin/bash

RAPIDAPI_KEY="YOUR_RAPIDAPI_KEY"

curl -X GET \
  "https://security-guard-license-verification.p.rapidapi.com/verify/license?state=CA&license_number=2623" \
  -H "X-RapidAPI-Key: $RAPIDAPI_KEY" \
  -H "X-RapidAPI-Host: security-guard-license-verification.p.rapidapi.com"
