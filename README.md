# Jinja Template Highlighting

Syntax highlighting for jinja(2) including HTML, Markdown, YAML and other templates.

![IDE](https://raw.githubusercontent.com/samuelcolvin/jinjahtml-vscode/master/screenshot.png)

Introduces syntax highlighting into vscode for the following languages:

* **Jinja Raw** raw jinja templates, system name `jinja`,
  no file default associations
* **Jinja HTML** jinja HTML templates, system name `jinja-html`,
  default file assocations: `.jinja`, `.jinja2`, `.j2` and `.html.j2`
* **Jinja Markdown** jinja markdown templates, system name `jinja-md`,
  default file assocations: `.md.jinja`, `.md.jinja2` and `.md.j2`
* **Jinja YAML** jinja YAML (sls) templates, system name `jinja-yaml`,
  default file assocations: `.yml.j2`, `.yaml.j2` and `.sls`
* **Jinja LaTeX** jinja latex templates, system name `jinja-latex`,
  default file assocations: `.latex.j2`, `.tex.j2`, `.latex.jinja2` and `.tex.jinja2`
* **Jinja Properties** aka config/ini file, system name `jinja-properties`,
  default file assocations: `.properties.j2`, `.cfg.j2`, `.conf.j2`, `.desktop.j2`, `.directory.j2` and `.ini.j2`
* **Jinja Shell Script** jinja shell/bash templates, system name `jinja-shell`,
  default file assocations: `.sh.j2`, `.bash.j2`, `.bashrc.j2`, `.bash_aliases.j2`, `.bash_profile.j2`,
  `.bash_login.j2`, `.ebuild.j2`, `.install.j2`, `.profile.j2`, `.bash_logout.j2`, `.zsh.j2`, `.zshrc.j2`,
  `.zprofile.j2`, `.zlogin.j2`, `.zlogout.j2`, `.zshenv.j2`, `.zsh-theme.j2` and `.ksh.j2`
  (same as for the `shell` language with `.j2` added)

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

## Note on LaTeX Templates

Jinja blocks use `{% %}` by default which does not play nicely with LaTeX, so those are replaced by `((* *))` in LaTeX templates.
