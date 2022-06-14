oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g safeguard
$ safeguard COMMAND
running command...
$ safeguard (--version)
safeguard/0.0.0 linux-x64 node-v16.15.1
$ safeguard --help [COMMAND]
USAGE
  $ safeguard COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`safeguard hello PERSON`](#safeguard-hello-person)
* [`safeguard hello world`](#safeguard-hello-world)
* [`safeguard help [COMMAND]`](#safeguard-help-command)
* [`safeguard plugins`](#safeguard-plugins)
* [`safeguard plugins:install PLUGIN...`](#safeguard-pluginsinstall-plugin)
* [`safeguard plugins:inspect PLUGIN...`](#safeguard-pluginsinspect-plugin)
* [`safeguard plugins:install PLUGIN...`](#safeguard-pluginsinstall-plugin-1)
* [`safeguard plugins:link PLUGIN`](#safeguard-pluginslink-plugin)
* [`safeguard plugins:uninstall PLUGIN...`](#safeguard-pluginsuninstall-plugin)
* [`safeguard plugins:uninstall PLUGIN...`](#safeguard-pluginsuninstall-plugin-1)
* [`safeguard plugins:uninstall PLUGIN...`](#safeguard-pluginsuninstall-plugin-2)
* [`safeguard plugins update`](#safeguard-plugins-update)

## `safeguard hello PERSON`

Say hello

```
USAGE
  $ safeguard hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/manueltarouca/safeguard/blob/v0.0.0/dist/commands/hello/index.ts)_

## `safeguard hello world`

Say hello world

```
USAGE
  $ safeguard hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `safeguard help [COMMAND]`

Display help for safeguard.

```
USAGE
  $ safeguard help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for safeguard.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `safeguard plugins`

List installed plugins.

```
USAGE
  $ safeguard plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ safeguard plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `safeguard plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ safeguard plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ safeguard plugins add

EXAMPLES
  $ safeguard plugins:install myplugin 

  $ safeguard plugins:install https://github.com/someuser/someplugin

  $ safeguard plugins:install someuser/someplugin
```

## `safeguard plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ safeguard plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ safeguard plugins:inspect myplugin
```

## `safeguard plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ safeguard plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ safeguard plugins add

EXAMPLES
  $ safeguard plugins:install myplugin 

  $ safeguard plugins:install https://github.com/someuser/someplugin

  $ safeguard plugins:install someuser/someplugin
```

## `safeguard plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ safeguard plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ safeguard plugins:link myplugin
```

## `safeguard plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ safeguard plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ safeguard plugins unlink
  $ safeguard plugins remove
```

## `safeguard plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ safeguard plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ safeguard plugins unlink
  $ safeguard plugins remove
```

## `safeguard plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ safeguard plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ safeguard plugins unlink
  $ safeguard plugins remove
```

## `safeguard plugins update`

Update installed plugins.

```
USAGE
  $ safeguard plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
