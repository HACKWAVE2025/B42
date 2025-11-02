import requests

audio_path = r"C:\Users\narra\Documents\hackwave 25\temp\chatterbox\sample1.wav"

url = "http://localhost:9000/asr"

params = {
    "encode": "true",
    "task": "transcribe",
    "output": "txt"
}

files = {
    "audio_file": ( "sample1.wav", open(audio_path, "rb"), "audio/wav")
}

response = requests.post(url, params=params, files=files)

if response.status_code == 200:
    print("Transcription result:\n")
    print(response.text)
else:
    print(f"Error {response.status_code}: {response.text}")
