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
  * `anas copy yourSweetFile.js`
  * You can copy multiple files:
    * `anas copy yourSweetFile.js anotherFile.txt`
  * Do stuff with your sweet file(s)
* Clean up after yourself:
  * `anas cleanup`
* Get help:
  * `anas --help`
* Get version:
  * `anas -V`

### Options

* `-r, --repository` - the `git clone` URL (this defaults to our repository right now)
* `--copy-destination` - the path where you want your file copied (defaults to `./`)
* `--clone-destination` - the path where you want the source repository cloned into (defaults to `/tmp/`)

### Commands

* `anas copy [files...]` - clones source repository and copies file
* `anas cleanup` - `rimraf`s cloned repository & copied file

### Notes

* A status file is saved in `/tmp/` and is removed with `Anas#cleanup`
* `git` repository is cloned into `/tmp/` by default
