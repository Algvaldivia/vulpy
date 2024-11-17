import requests
import time

# AzureDevops pre-invalidated PAT token
# https://resources.github.com/learn/pathways/security/intermediate/customizing-secret-scanning-scope/
az_pat_token = 'pfnm5xd56muu7srpsme5jxeiwo23vuyavuyo2msziwy34ca7oaha'


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
