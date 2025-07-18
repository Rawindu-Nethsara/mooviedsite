import json
import os

# Directory containing poster files
movies_dir = "movies"

# Generate movie metadata
movies = []
for filename in os.listdir(movies_dir):
    if filename.endswith((".jpg", ".png")):  # Add other image extensions as needed
        title = filename.replace(".", " ").replace("-", " ").title()  # Simple title formatting
        movies.append({
            "poster": filename,
            "title": title,
            "cast": ["Unknown Actor 1", "Unknown Actor 2"],
            "description": f"Description for {title}",
            "labels": ["bluray", "fhd"],
            "downloadLink": "https://example.com/download/REPLACE_WITH_ACTUAL_LINK",
            "rating": 4.0,
            "isTopRated": False,
            "isMoovied": False
        })

# Save to movies.json
with open("movies.json", "w") as f:
    json.dump(movies, f, indent=2)

print("movies.json generated successfully!")
