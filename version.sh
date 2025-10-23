#!/bin/bash

# Script to create a new version of @kiiako/blocks
# Usage: ./version.sh [patch|minor|major]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if version type is provided
if [ -z "$1" ]; then
  echo -e "${RED}Error: Version type is required${NC}"
  echo "Usage: ./version.sh [patch|minor|major]"
  echo ""
  echo "Examples:"
  echo "  ./version.sh patch   # 1.0.0 -> 1.0.1 (bug fixes)"
  echo "  ./version.sh minor   # 1.0.0 -> 1.1.0 (new features)"
  echo "  ./version.sh major   # 1.0.0 -> 2.0.0 (breaking changes)"
  exit 1
fi

VERSION_TYPE=$1

# Validate version type
if [[ ! "$VERSION_TYPE" =~ ^(patch|minor|major)$ ]]; then
  echo -e "${RED}Error: Invalid version type${NC}"
  echo "Version type must be one of: patch, minor, major"
  exit 1
fi

echo -e "${YELLOW}Creating new ${VERSION_TYPE} version...${NC}"

# Check if there are uncommitted changes
if [[ -n $(git status -s) ]]; then
  echo -e "${RED}Error: You have uncommitted changes${NC}"
  echo "Please commit or stash your changes before creating a version"
  git status -s
  exit 1
fi

# Get current version from package.json
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo -e "Current version: ${GREEN}${CURRENT_VERSION}${NC}"

# Update version using npm
npm version $VERSION_TYPE --no-git-tag-version

# Get new version
NEW_VERSION=$(node -p "require('./package.json').version")
echo -e "New version: ${GREEN}${NEW_VERSION}${NC}"

# Build the package
echo -e "${YELLOW}Building package...${NC}"
npm run build

# Commit the version change
echo -e "${YELLOW}Committing version change...${NC}"
git add package.json CHANGELOG.md
git commit -m "chore: bump version to ${NEW_VERSION}"

# Create git tag
echo -e "${YELLOW}Creating git tag...${NC}"
git tag "v${NEW_VERSION}"

echo ""
echo -e "${GREEN}✓ Version ${NEW_VERSION} created successfully!${NC}"
echo ""
echo "Next steps:"
echo "1. Push commits: git push origin main"
echo "2. Push tag: git push origin v${NEW_VERSION}"
echo ""
echo "To update in your projects:"
echo "  npm install github:kiiako/kiiako-blocks#v${NEW_VERSION}"
echo ""
echo "Or update package.json:"
echo "  \"@kiiako/blocks\": \"github:kiiako/kiiako-blocks#v${NEW_VERSION}\""
