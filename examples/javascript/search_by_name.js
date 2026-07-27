const RAPIDAPI_KEY = "YOUR_RAPIDAPI_KEY";

const params = new URLSearchParams({
  state: "NY",
  last_name: "Smith",
  first_name: "John",
  limit: "10",
});

const response = await fetch(
  `https://security-guard-license-verification.p.rapidapi.com/verify/name?${params}`,
  {
    headers: {
      "X-RapidAPI-Key": RAPIDAPI_KEY,
      "X-RapidAPI-Host": "security-guard-license-verification.p.rapidapi.com",
    },
  }
);

const results = await response.json();

if (Array.isArray(results)) {
  console.log(`Found ${results.length} result(s):\n`);
  for (const r of results) {
    console.log(`  ${r.name} | ${r.license_number} | ${r.status} | expires ${r.expiry_date}`);
  }
} else {
  console.log("Not found:", results.message);
}
