#!/bin/bash

# Exit immediately if any command fails, making the script safer.
set -e

# --- Prerequisites Check ---
# Check if yq is installed.
if ! command -v yq &> /dev/null; then
    echo "Error: yq is not installed."
    echo "Please install it with Homebrew: brew install yq"
    exit 1
fi

# Check if jj is installed.
if ! command -v jj &> /dev/null; then
    echo "Error: jj is not installed."
    echo "Please install it with Homebrew: brew install jj"
    echo "Alternatively, you can use 'jq' (see script comments)."
    exit 1
fi

# --- Main Logic ---
echo "Searching for .yml and .yaml files in the current directory..."

# This prevents the loop from running if no files match
shopt -s nullglob

# Loop through all files ending in .yml or .yaml
for file in *.yml *.yaml; do
  # Determine the base name (without extension) and the target .json filename
  base_name="${file%.*}"
  json_file="${base_name}.json"

  echo "Processing '$file' -> '$json_file'..."

  # Step 1: Convert YAML to JSON using yq.
  # The '.' means "output the whole file". -o=json specifies json output.
  yq -o=json "$file" > "$json_file"

  # Step 2: Minify the JSON file using jj.
  # This uses a temporary file to safely overwrite the original.
  # If you prefer to use jq, replace this line with the alternative below.
  # jj -u < "$json_file" > "${json_file}.tmp" && mv "${json_file}.tmp" "$json_file"

  # --- Alternative using jq (a more common tool) ---
  # If you prefer to use jq, install it (`brew install jq`) and use this line instead:
  # jq -c . "$json_file" > "${json_file}.tmp" && mv "${json_file}.tmp" "$json_file"

done

echo "Conversion complete."