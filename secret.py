import requests
from requests.auth import HTTPBasicAuth

# Your Fitbit app credentials
CLIENT_ID = "23TH8Q"
CLIENT_SECRET = "2f7295985ca053f7938b52d81cd2259d"
REDIRECT_URI = "http://localhost:8080/callback"

# The auth code you received
AUTH_CODE = "1012a341de014a1d32544e2a35f0a2754847e80b"

# Your PKCE code verifier
CODE_VERIFIER = "1i266t2w4j4m3u100l4v5t2n3q5m0j031i4e4y093i6o6q1s1s450g111l2y356c31491e356p1j6r0q0n191n6p2n6046420n432a2d4m4a57704y0y5c3k4w494b3q"

# Exchange code for access token
data = {
    "client_id": CLIENT_ID,
    "grant_type": "authorization_code",
    "redirect_uri": REDIRECT_URI,
    "code": AUTH_CODE,
    "code_verifier": CODE_VERIFIER
}

response = requests.post(
    "https://api.fitbit.com/oauth2/token",
    data=data,
    auth=HTTPBasicAuth(CLIENT_ID, CLIENT_SECRET)
)

print(response.json())
