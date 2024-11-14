import requests
import time

HEADERS = {
    "Accept": "application/json",
    "Secret-Token": "KI9R8Q~JHjZ8eSOHXQA18jSRbzDg00syxsMlrjaSL"
}

AUTH_URL = "https://auth.urubeta.api/root/tokens/"
response = requests.post(AUTH_URL, data=HEADERS)
if response.status_code == 200:
    token_data = response.json()
    access_token = token_data["access_token"]
    expires_in = int(token_data["expires_in"])  # Convert expires_in to an integer
    token_expiration_time = time.time() + expires_in
else:
    access_token = None
