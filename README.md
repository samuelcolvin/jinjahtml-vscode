# Jinja Template Highlighting

Syntax highlighting for jinja(2) including HTML, Markdown, YAML and other templates.

![IDE](https://raw.githubusercontent.com/samuelcolvin/jinjahtml-vscode/main/screenshot.png)

## Languages:

Introduces syntax highlighting into vscode for the following languages:

### Jinja Raw

Raw jinja templates: system name `jinja`.

no file default associations.

### Jinja HTML

Jinja HTML templates: system name `jinja-html`.

Default file associations: `.jinja`, `.jinja2`, `.j2` and `.html.j2`.

### Jinja XML

Jinja HTML templates: system name `jinja-xml`.

Default file associations: `.xml.jinja`, `.xml.jinja2`, `.xml.j2`.

### Jinja CSS

Jinja HTML templates: system name `jinja-css`.

Default file associations: `.css.jinja`, `.css.jinja2`, `.css.j2`.

### Jinja JSON

Jinja JSON templates: system name `jinja-json`.

Default file associations: `.json.jinja`, `.json.jinja2`, `.json.j2`.

### Jinja Markdown

Jinja markdown templates: system name `jinja-md`.

Default file associations: `.md.jinja`, `.md.jinja2` and `.md.j2`.

### Jinja YAML

Jinja YAML (sls) templates: system name `jinja-yaml`.

Default file associations: `.yml.j2`, `.yaml.j2`, `.yaml.jinja`, `.yml.jinja`, and `.sls`.

### Jinja TOML

Jinja TOML templates: system name `jinja-toml`.

Default file associations: `.toml.jinja`, `.toml.jinja2` and `.toml.j2`.

### Jinja LaTeX

Jinja latex templates: system name `jinja-latex`.

Jinja's default syntax does not play nicely with LaTeX,
so this extension adopts the style used in
[Jupyter nbconvert templates](https://github.com/jupyter/nbconvert/tree/main/share/templates/latex):

- `((*` and `*))` (rather than `{%` and `%}`) for statements / blocks
- `(((` and `)))` (rather than `{{` and `}}`) for expressions / variables
- `((=` and `=))` (rather than `{#` and `#}`) for comments

Thus assuming the following Jinja configuration:

```python
env = jinja2.Environment(
    block_start_string="((*",
    block_end_string="*))",
    variable_start_string="(((",
    variable_end_string=")))",
    comment_start_string="((=",
    comment_end_string="=))",
    ...
)
```

Default file associations: `.latex.j2`, `.tex.j2`, `.latex.jinja2` and `.tex.jinja2`.

### Jinja Lua

Jinja Lua templates: system name `jinja-lua`.

Default file associations: `.lua.jinja`, `.lua.jinja2` and `.lua.j2`.

### Jinja Properties

aka config / cfg / ini file: system name `jinja-properties`.

Default file associations: `.properties.j2`, `.cfg.j2`, `.conf.j2`, `.desktop.j2`, `.directory.j2` and `.ini.j2`.

### Jinja Shell Scripts

Jinja shell/bash/zsh templates: system name `jinja-shell`.

Default file associations (same as for the `shell` language with `.j2` appended):
`.sh.j2`, `.bash.j2`, `.bashrc.j2`, `.bash_aliases.j2`, `.bash_profile.j2`,
`.bash_login.j2`, `.ebuild.j2`, `.install.j2`, `.profile.j2`, `.bash_logout.j2`, `.zsh.j2`, `.zshrc.j2`,
`.zprofile.j2`, `.zlogin.j2`, `.zlogout.j2`, `.zshenv.j2`, `.zsh-theme.j2` and `.ksh.j2`.

### Dockerfiles

Dockerfile templates: system name `jinja-dockerfile`.

Default file associations: `.dockerfile.j2`, `.dockerfile.jinja` and `.dockerfile.jinja2`.

Unfortunately associating `jinja-dockerfile` with file names like `Dockerfile.j2` doesn't seem to work.

### Jinja SQL

Jinja SQL templates: system name `jinja-sql`.

Default file associations: `.sql.j2`, `.sql.jinja` and `.sql.jinja2`.

### Jinja Python

Jinja python templates: system name `jinja-py`.

Default file associations: `.py.j2`, `.py.jinja`, `.py.jinja2`, `.pyi.j2`, `.pyi.jinja` and `.pyi.jinja2`.

### Jinja Cython

Jinja cython templates: system name `jinja-cy`.

Default file associations: `.pyx.j2`, `.pyx.jinja`, `.pyx.jinja2`, `.pxd.j2`, `.pxd.jinja`, `.pxd.jinja2`, `.pxi.j2`, `.pxi.jinja` and `.pxi.jinja2`.

### Jinja Terraform / HashiCorp configuration language

Jinja Terraform templates: system name `jinja-terraform`.

Default file associations: `.tf.j2`, `.tf.jinja`, `.tf.jinja2`, `.tfvars.j2`, `.tfvars.jinja`, `.tfvars.jinja2`, `.hcl.j2`, `.hcl.jinja` and `.hcl.jinja2`.

### Jinja Nginx

Jinja Nginx Conf templates: system name `jinja-nginx`.

Default file associations: `.conf.j2`, `.conf.jinja`, and `.conf.jinja2`.

### Jinja Groovy

Jinja Groovy templates: system name `jinja-groovy`.

Default file associations: `.groovy.j2`, `.groovy.jinja` and `.groovy.jinja2`.

### Jinja Systemd Unit Files

Jinja Systemd Unit File templates: system name `jinja-systemd`.

Default file associations: `.link.j2`, `.link.jinja`, `.link.jinja2`, `.netdev.j2`, `.netdev.jinja`, `.netdev.jinja2`, `.network.j2`, `.network.jinja`, `.network.jinja2`, `.service.j2`, `.service.jinja`, `.service.jinja2`, `.socket.j2`, `.socket.jinja`, `.socket.jinja2`, `.device.j2`, `.device.jinja`, `.device.jinja2`, `.mount.j2`, `.mount.jinja`, `.mount.jinja2`, `.automount.j2`, `.automount.jinja`, `.automount.jinja2`, `.swap.j2`, `.swap.jinja`, `.swap.jinja2`, `.target.j2`, `.target.jinja`, `.target.jinja2`, `.path.j2`, `.path.jinja`, `.path.jinja2`, `.timer.j2`, `.timer.jinja`, `.timer.jinja2`, `.snapshot.j2`, `.snapshot.jinja`, `.snapshot.jinja2`, `.slice.j2`, `.slice.jinja`, `.slice.jinja2`, `.scope.j2`, `.scope.jinja` and `.scope.jinja2`.

### Jinja C++

Jinja C++ templates: system name `jinja-cpp`.

Default file associations: `.c.j2`, `.c.jinja`, `.c.jinja2`, `.cpp.jinja`, `.cpp.jinja2`,`.cpp.j2`,`.h.jinja`, `.h.jinja2`, and `.h.j2`.

### Jinja Java

Jinja Java templates: system name `jinja-java`.

Default file associations: `.java.j2`, `.java.jinja`, and `.java.jinja2`.

### Jinja PHP

Jinja PHP templates: system name `jinja-php`.

Default file associations: `.php.j2`, `.php.jinja`, and `.php.jinja2`.

### Jinja Cisco IOS

Cisco IOS configuration templates: system name `jinja-cisco`.

Default file associations: `.ios.j2`, `.ios.jinja`, `.ios.jinja2`, `.cisco.j2`, `.cisco.jinja`, `.cisco.jinja2`

### Jinja Rust

Jinja Rust templates: system name `jinja-rust`.

Default file associations: `.rs.j2`, `.rs.jinja`, and `.rs.jinja2`

## Extra File Associations

You can add more file associations, for example to associate `.html` files with `jinja-html`;
in your user or workspace settings add:

```json
"files.associations": {
  "*.html": "jinja-html"
},
```

## Snippet Support

- **[Django](https://github.com/vscode-django/vscode-django)**

## Breakpoints Support

Allows to set breakpoints in template file.
In order to correctly debug template add `"jinja": true` option to your configuration in `launch.json` file.
