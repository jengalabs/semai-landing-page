#!/bin/bash

cd /vercel/share/v0-project

# Add favicon files to git
git add public/icon-light-32x32.png
git add public/icon-dark-32x32.png
git add public/apple-icon.png
git add public/favicon.ico
git add public/icon.svg

# Commit with descriptive message
git commit -m "Add favicon files for browser tabs, bookmarks, and social media previews"

echo "Favicon files committed successfully!"
