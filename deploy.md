# To launch in dev mode

```bash
code examples/ --extensionDevelopmentPath=.
```

# To deploy

Update:

- `CHANGELOG.md`
- `package.json::version` (and run `npm install` to update `package-lock.json`)

Then create a GitHub release with a tag like `v0.21`; CI will publish to the marketplace using trusted publishing
(OIDC) from the `release` environment, no token needed.
