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
  default file assocations: `.latex.j2`, `.tex.j2`, `latex.jinja2` and `tex.jinja2`
* **Jinja Properties** aka config/ini file, system name `jinja-properties`,
  default file assocations: `.properties.j2`, `.cfg.j2`, `.conf.j2`, `.desktop.j2`, `.directory.j2` and `.ini.j2`

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
