#!/bin/bash

folder_path="/Documents/recipe-sharing"

cd "$folder_path" || exit

git add .

echo "Enter a commit message"

read commit_message

git commit -m "$commit_message"

git push origin main
