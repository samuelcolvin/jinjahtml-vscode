# To launch in dev mode

```bash
code examples/ --extensionDevelopmentPath=.
```

# To deploy

Update:

- `CHANGELOG.md`
- `package.json::version` (and run `npm install` to update `package-lock.json`)

Then create a GitHub release with a tag like `v0.21.0`; CI will publish to the marketplace using the `VSCE_PAT`
secret (an Azure DevOps personal access token with "Marketplace > Manage" scope, these expire so may need renewing).
