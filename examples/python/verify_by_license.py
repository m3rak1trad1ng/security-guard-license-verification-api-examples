import requests

RAPIDAPI_KEY = "YOUR_RAPIDAPI_KEY"

url = "https://security-guard-license-verification.p.rapidapi.com/verify/license"

headers = {
    "X-RapidAPI-Key": RAPIDAPI_KEY,
    "X-RapidAPI-Host": "security-guard-license-verification.p.rapidapi.com",
}

params = {
    "state": "CA",
    "license_number": "2623",
}

response = requests.get(url, headers=headers, params=params)
data = response.json()

if data.get("found") is False:
    print(f"Not found: {data['message']}")
else:
    print(f"Name:         {data['name']}")
    print(f"Status:       {data['status']}")
    print(f"License type: {data['license_type']}")
    print(f"Expires:      {data['expiry_date']}")
    print(f"Cached:       {data['cached']}")
