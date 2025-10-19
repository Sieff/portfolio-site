#!/bin/bash
set -e

# Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
  echo "Repository is not clean. Commit or stash changes first."
  exit 1
fi

# Bump patch version in all workspaces
npm version patch --workspaces

# Get the new version
NEW_VERSION=$(node -p "require('./package.json').version")

# Commit and create a git tag
git add .
git commit -m "v$NEW_VERSION"
git tag "v$NEW_VERSION"

# Push commit and tag
git push
git push origin "v$NEW_VERSION"

echo "Released version v$NEW_VERSION"
