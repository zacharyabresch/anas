# `anas`

## Objective

To build a CLI tool to utilize one-off scripts stored in a separate repository.

## Why?

Our team wants to move one-off scripts & proof-of-concept code into a separate "utility" repository. We _still_ want to be able to use these scripts from our application. Hence, `anas` was born.

## What's with that name?

While looking for synonyms to "shoveler" (our utility repository is called `picks-and-shovels`) I stumbled across the genus of ducks that "shoveler ducks" belong to ... [Anas](https://en.wikipedia.org/wiki/Anas). **_BOOM_**!

## Usage

* Install from `npm`
  * `yarn add anas` or `npm i anas`
  * You might want to install globally ...
* Run `anas` from terminal:
  * `anas -f fileToCopyFromRepository.js copy`
  * Do stuff with your sweet file
* Clean up after yourself:
  * `anas -f fileToCopyFromRepository.js cleanup`
* Get help:
  * `anas --help`
* Get version:
  * `anas -V`

### Options

* `-r, --repository` - the `git clone` URL (this defaults to our repository right now)
* `-f, --file` (**required**) - the file you want to copy into your current project
  * This can be a relative path from your source repository's root
* `--copy-destination` - the path where you want your file copied (defaults to `./`)
* `--clone-destination` - the path where you want the source repository cloned into (defaults to `/tmp/`)

### Commands

* `anas -f filename.js copy` - clones source repository and copies file
* `anas -f filename.js cleanup` - `rimraf`s cloned repository & copied file
