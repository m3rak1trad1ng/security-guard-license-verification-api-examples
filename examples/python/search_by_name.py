import requests

RAPIDAPI_KEY = "YOUR_RAPIDAPI_KEY"

url = "https://security-guard-license-verification.p.rapidapi.com/verify/name"

headers = {
    "X-RapidAPI-Key": RAPIDAPI_KEY,
    "X-RapidAPI-Host": "security-guard-license-verification.p.rapidapi.com",
}

params = {
    "state": "NY",
    "last_name": "Smith",
    "first_name": "John",
    "limit": 10,
}

response = requests.get(url, headers=headers, params=params)
results = response.json()

if isinstance(results, list):
    print(f"Found {len(results)} result(s):\n")
    for r in results:
        print(f"  {r['name']} | {r['license_number']} | {r['status']} | expires {r['expiry_date']}")
else:
    print(f"Not found: {results.get('message')}")
