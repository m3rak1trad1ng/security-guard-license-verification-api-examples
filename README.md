> # ⚠️ RETIRED — 9 August 2026
>
> **The Security Guard License Verification API is no longer running.**
>
> The service has been shut down. Every endpoint referenced below now returns
> **HTTP 502**, and the RapidAPI listing has been removed. These examples are
> kept for reference only — they will not work.
>
> Do not use this as the basis for an integration.

# Security Guard License Verification API — Examples

Code examples for the [Security Guard License Verification API](https://rapidapi.com/operational-systems-llc-operational-systems-llc-default/api/security-guard-license-verification-api) on RapidAPI.

Verify security guard licenses against official state licensing records. Returns active/inactive status, name, license type, and expiration date.

**Supported states:** CA, IL, NY, OR (more in progress)

## Get Started

1. Subscribe on RapidAPI (free tier: 10 requests/month): [View listing →](https://rapidapi.com/operational-systems-llc-operational-systems-llc-default/api/security-guard-license-verification-api)
2. Copy your `X-RapidAPI-Key`
3. Run any example below

## Examples

| Language | File |
|----------|------|
| cURL | [examples/curl/verify_by_license.sh](examples/curl/verify_by_license.sh) |
| cURL | [examples/curl/search_by_name.sh](examples/curl/search_by_name.sh) |
| Python | [examples/python/verify_by_license.py](examples/python/verify_by_license.py) |
| Python | [examples/python/search_by_name.py](examples/python/search_by_name.py) |
| JavaScript | [examples/javascript/verify_by_license.js](examples/javascript/verify_by_license.js) |
| JavaScript | [examples/javascript/search_by_name.js](examples/javascript/search_by_name.js) |

## Endpoints

**Base URL (via RapidAPI):**
```
https://security-guard-license-verification.p.rapidapi.com
```

### Verify by license number
```
GET /verify/license?state=CA&license_number=2623
```

### Search by name
```
GET /verify/name?state=NY&last_name=Smith&first_name=John
```

## Response

```json
{
  "license_number": "2623",
  "name": "JOHN SMITH",
  "status": "Active",
  "state": "CA",
  "license_type": "Security Guard",
  "expiry_date": "2026-12-31",
  "issue_date": "2022-01-15",
  "source_url": "https://www.bsis.ca.gov/...",
  "retrieved_at": "2026-07-26T18:00:00+00:00",
  "cached": true
}
```

Not found:
```json
{
  "found": false,
  "license_number": "9999999",
  "state": "CA",
  "message": "No license found matching the provided number.",
  "retrieved_at": "2026-07-26T18:00:00+00:00",
  "cached": false
}
```

## OpenAPI Spec

```
https://api.operational-systems.com/sg/openapi.json
```

## License

MIT
