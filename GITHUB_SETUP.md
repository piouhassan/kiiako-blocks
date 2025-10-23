# GitHub Setup Guide for @kiiako/blocks

This guide explains how to set up @kiiako/blocks and @kiiako/render as GitHub packages that can be used in both the builder and client applications.

## Step 1: Create GitHub Repositories

### Option A: Separate Repositories (Recommended)

Create two separate repositories:

1. **kiiako-render** - For the render engine
   ```bash
   cd packages/render
   git init
   git add .
   git commit -m "Initial commit: @kiiako/render"
   git remote add origin https://github.com/YOUR_USERNAME/kiiako-render.git
   git push -u origin main
   git tag v1.0.0
   git push origin v1.0.0
   ```

2. **kiiako-blocks** - For the blocks
   ```bash
   cd packages/blocks
   git init
   git add .
   git commit -m "Initial commit: @kiiako/blocks"
   git remote add origin https://github.com/YOUR_USERNAME/kiiako-blocks.git
   git push -u origin main
   git tag v1.0.0
   git push origin v1.0.0
   ```

### Option B: Monorepo with Subdirectories

Keep both packages in your main repository and reference them by subdirectory:

```bash
cd kiiako-2-docker-dev
git add packages/render packages/blocks
git commit -m "Add render and blocks packages"
git push origin main
git tag packages/render/v1.0.0
git tag packages/blocks/v1.0.0
git push origin --tags
```

## Step 2: Configure Private Repository Access (if needed)

If your repositories are private, you need to set up authentication:

### Using GitHub Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` scope
3. Create `.npmrc` in your project root (builder or client):

```
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

⚠️ **Important**: Add `.npmrc` to `.gitignore` to avoid committing your token!

## Step 3: Install in Builder

### Update builder/package.json

```json
{
  "dependencies": {
    "@kiiako/render": "github:YOUR_USERNAME/kiiako-render#v1.0.0",
    "@kiiako/blocks": "github:YOUR_USERNAME/kiiako-blocks#v1.0.0"
  }
}
```

Or if using monorepo:

```json
{
  "dependencies": {
    "@kiiako/render": "github:YOUR_USERNAME/kiiako-main-repo#packages/render/v1.0.0",
    "@kiiako/blocks": "github:YOUR_USERNAME/kiiako-main-repo#packages/blocks/v1.0.0"
  }
}
```

### Update builder imports

In `builder/src/main.tsx`:

```tsx
import '@kiiako/blocks/auto-register';
import App from './App';

// All blocks are now registered
```

Remove the old blocks imports from builder:
- Delete or comment out `import './blocks'` in main.tsx
- The blocks now come from @kiiako/blocks package

## Step 4: Install in Client (Store)

### Update client/package.json

```json
{
  "dependencies": {
    "@kiiako/render": "github:YOUR_USERNAME/kiiako-render#v1.0.0",
    "@kiiako/blocks": "github:YOUR_USERNAME/kiiako-blocks#v1.0.0"
  }
}
```

### Update client code

In `client/src/main.tsx` or `client/src/App.tsx`:

```tsx
import '@kiiako/blocks/auto-register';
import { PageRenderer } from '@kiiako/render';

// Now you can render pages with blocks
function DynamicPage({ blocks }) {
  return <PageRenderer blocks={blocks} />;
}
```

## Step 5: Update Workflow

### When You Need to Update Blocks

1. **Make changes** in `packages/blocks/src/`

2. **Test locally**:
   ```bash
   cd packages/blocks
   npm run build
   ```

3. **Create new version**:
   ```bash
   ./version.sh patch  # or minor, major
   ```

4. **Push to GitHub**:
   ```bash
   git push origin main
   git push origin v1.0.1
   ```

5. **Update in builder**:
   ```bash
   cd builder
   npm install github:YOUR_USERNAME/kiiako-blocks#v1.0.1
   ```

6. **Update in client**:
   ```bash
   cd client
   npm install github:YOUR_USERNAME/kiiako-blocks#v1.0.1
   ```

### Version Strategy

Use semantic versioning:

- **Patch** (1.0.x): Bug fixes in existing blocks
  ```bash
  ./version.sh patch
  ```

- **Minor** (1.x.0): New blocks or new features
  ```bash
  ./version.sh minor
  ```

- **Major** (x.0.0): Breaking changes (API changes, removed blocks)
  ```bash
  ./version.sh major
  ```

## Step 6: Team Collaboration

### For Team Members

1. **Clone the repositories**
2. **Install dependencies**:
   ```bash
   cd packages/blocks
   npm install
   ```

3. **Make changes and test**:
   ```bash
   npm run dev  # Watch mode
   npm run build  # Production build
   ```

4. **Create PR** with your changes
5. **After merge**, maintainer creates new version using `version.sh`

### Best Practices

1. **Always test locally** before creating a version
2. **Update CHANGELOG.md** with your changes
3. **Use clear commit messages**:
   - `feat: add new hero variant`
   - `fix: correct footer alignment`
   - `docs: update README`
4. **Create PRs** for review before merging to main
5. **Tag releases** properly for version tracking

## Troubleshooting

### "Package not found" error

- Check repository URL in package.json
- Ensure tag exists: `git tag -l`
- For private repos, verify authentication

### "Cannot find module @kiiako/render"

- Ensure @kiiako/render is installed before @kiiako/blocks
- Check peerDependencies are satisfied

### Changes not reflecting after update

- Clear node_modules and reinstall:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```
- Ensure you're using the correct version tag

### Build errors

- Check TypeScript errors: `npm run lint`
- Ensure all dependencies are installed
- Verify tsconfig.json settings

## Alternative: Local Development

For local development without GitHub:

```json
{
  "dependencies": {
    "@kiiako/render": "file:../packages/render",
    "@kiiako/blocks": "file:../packages/blocks"
  }
}
```

This is useful for:
- Testing changes before pushing
- Working offline
- Rapid iteration during development

Switch back to GitHub URLs for production/deployment.

## Summary

✅ **Benefits of this approach:**
- Centralized block management
- Easy updates across builder and client
- Version control for blocks
- Team collaboration friendly
- No need for npm registry

✅ **Recommended workflow:**
1. Develop blocks in `packages/blocks`
2. Test locally with `file:` references
3. Push to GitHub with version tag
4. Update builder and client with new version
5. Deploy with confidence

For questions or issues, contact the dev team or create an issue on GitHub.
