# Jinja Template Highlighting

Syntax highlighting for jinja(2) including HTML, Markdown, YAML and other templates.

![IDE](https://raw.githubusercontent.com/samuelcolvin/jinjahtml-vscode/master/screenshot.png)

## Languages:

Introduces syntax highlighting into vscode for the following languages:

### 1. Jinja Raw

Raw jinja templates: system name `jinja`

no file default associations

### 2. Jinja HTML

Jinja HTML templates: system name `jinja-html`

Default file assocations: `.jinja`, `.jinja2`, `.j2` and `.html.j2`

### 3. Jinja Markdown

Jinja markdown templates: system name `jinja-md`

Default file assocations: `.md.jinja`, `.md.jinja2` and `.md.j2`

### 4. Jinja YAML

Jinja YAML (sls) templates: system name `jinja-yaml`

Default file assocations: `.yml.j2`, `.yaml.j2` and `.sls`

### 5. Jinja LaTeX

Jinja latex templates: system name `jinja-latex`

Jinja blocks use `{% %}` by default which does not play nicely with LaTeX,
so those are replaced by `((* *))` in LaTeX templates.

Default file assocations: `.latex.j2`, `.tex.j2`, `.latex.jinja2` and `.tex.jinja2`

### 6. Jinja Properties

aka config/ini file: system name `jinja-properties`

Default file assocations: `.properties.j2`, `.cfg.j2`, `.conf.j2`, `.desktop.j2`, `.directory.j2` and `.ini.j2`.

### 7. Jinja Shell Script

Jinja shell/bash/zsh templates: system name `jinja-shell`

Default file assocations (same as for the `shell` language with `.j2` added):
`.sh.j2`, `.bash.j2`, `.bashrc.j2`, `.bash_aliases.j2`, `.bash_profile.j2`,
`.bash_login.j2`, `.ebuild.j2`, `.install.j2`, `.profile.j2`, `.bash_logout.j2`, `.zsh.j2`, `.zshrc.j2`,
`.zprofile.j2`, `.zlogin.j2`, `.zlogout.j2`, `.zshenv.j2`, `.zsh-theme.j2` and `.ksh.j2`


## Extra File Associations

You can add more file associations, for example to associate `.html` files with `jinja-html`;
in your user or workspace settings add:

```json
"files.associations": {
  "*.html": "jinja-html"
},
```

## Snippet Support

* **[Django](https://github.com/vscode-django/vscode-django)**
