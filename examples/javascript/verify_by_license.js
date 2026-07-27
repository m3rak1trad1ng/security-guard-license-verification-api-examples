const RAPIDAPI_KEY = "YOUR_RAPIDAPI_KEY";

const response = await fetch(
  "https://security-guard-license-verification.p.rapidapi.com/verify/license?state=CA&license_number=2623",
  {
    headers: {
      "X-RapidAPI-Key": RAPIDAPI_KEY,
      "X-RapidAPI-Host": "security-guard-license-verification.p.rapidapi.com",
    },
  }
);

const data = await response.json();

if (data.found === false) {
  console.log("Not found:", data.message);
} else {
  console.log(`Name:         ${data.name}`);
  console.log(`Status:       ${data.status}`);
  console.log(`License type: ${data.license_type}`);
  console.log(`Expires:      ${data.expiry_date}`);
  console.log(`Cached:       ${data.cached}`);
}
