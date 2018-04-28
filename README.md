# Jinja Template Highlighting

Syntax highlighting for jinja(2) html templates.

Introduces syntax highlighting into vscode for three languages:

* **Jinja Raw** raw jinja templates, system name `jinja`
* **Jinja HTML** jinja html templates, system name `jinja-html`
* **Jinja YAML** jinja yaml (sls) templates, system name `jinja-yaml`

## Default File associations

The following file associations are setup by default:

* **`jinja`**: none
* **`jinja-html`**: `.jinja`, `.jinja2`, `.j2` and `.html.j2`
* **`jinja-yaml`**: `.sls`, `.yml.j2` and `.yaml.j2`

## Extra File Associations

You can add more file associations, for example to associate `.html` files with `jinja-html`;
in your user or workspace settings add:

```json
"files.associations": {
    "*.html": "jinja-html"
},
```
