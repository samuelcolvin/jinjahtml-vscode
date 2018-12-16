# Jinja Template Highlighting

Syntax highlighting for jinja(2) including HTML, Markdown and YAML templates

![IDE](https://raw.githubusercontent.com/samuelcolvin/jinjahtml-vscode/master/screenshot.png)

Introduces syntax highlighting into vscode for four languages:

* **Jinja Raw** raw jinja templates, system name `jinja`
* **Jinja HTML** jinja HTML templates, system name `jinja-html`
* **Jinja Markdown** jinja markdown templates, system name `jinja-md`
* **Jinja YAML** jinja YAML (sls) templates, system name `jinja-yaml`

## Default File associations

The following file associations are setup by default:

* **`jinja`**: none
* **`jinja-html`**: `.jinja`, `.jinja2`, `.j2` and `.html.j2`
* **`jinja-md`**: `.md.jinja`, `.md.jinja2` and `.md.j2`
* **`jinja-rb`**: `.rb.j2`, `.rbw.j2`, `rb.jinja2` and `rbw.jinja2`
* **`jinja-yaml`**: `.yml.j2`, `.yaml.j2` and `.sls`


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