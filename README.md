# Jinja Template Highlighting

Syntax highlighting for jinja(2) html templates.

Introduces syntax highlighting into vscode for languages:

* **Jinja Raw** raw jinja templates. By default no file extensions are associated with this file type
* **Jinja HTML** jinja html templates. By default `.jinja`, `.jinja2` and `.j2` extensions are associated.


You can add more file associations, for example to associate `.html` files with jinja-html,
in your user or workspace settings add

```json
"files.associations": {
    "*.html": "jinja-html"
},
```
