# effective-shell 

[![Release Please](https://github.com/dwmkerr/effective-shell/actions/workflows/release-please.yaml/badge.svg)](https://github.com/dwmkerr/effective-shell/actions/workflows/release-please.yaml) ![Version Badge](https://img.shields.io/github/v/tag/dwmkerr/effective-shell?label=version) [![Creative Commons BY-NC-SA](https://i.creativecommons.org/l/by-nc-sa/3.0/80x15.png)](http://creativecommons.org/licenses/by-nc-sa/3.0/)

Text, samples and references for my 'Effective Shell' series. This website is hosted at [effective-shell.com](https://effective-shell.com).

If you find this book useful, please do consider [sponsoring me](https://github.com/sponsors/dwmkerr) to help support my open-source work!

<!-- vim-markdown-toc GFM -->

* [Introduction](#introduction)
* [Installing the Samples](#installing-the-samples)
* [The Website](#the-website)
    * [Building the Website](#building-the-website)
    * [Updating the Theme](#updating-the-theme)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [Copyright & Licensing](#copyright--licensing)
* [Transitioning to Docusaurus](#transitioning-to-docusaurus)
    * [Transformations](#transformations)
    * [Task List](#task-list)
* [Thanks!](#thanks)

<!-- vim-markdown-toc -->

## Introduction

This repository contains all of the content for the [Effective Shell](https://effective-shell.com/) online book.

## Installing the Samples

You can install the samples into your `~/effective-shell` folder with this command:

```sh
curl effective.sh | sh
```

Or can also manually download them using from any of these locations:

- [https://effective-shell.com/downloads/effective-shell-samples.zip](https://effective-shell.com/downloads/effective-shell-samples.zip)
- [https://effective-shell.com/downloads/effective-shell-samples.tar.gz](https://effective-shell.com/downloads/effective-shell-samples.tar.gz)

The one-line shell installer is hosted at [github.com/dwmkerr/effective-shell-installer](https://github.com/dwmkerr/effective-shell-installer)

## The Website

The content in this repository is built into a static site available at [effective-shell.com](https://effective-shell.com). This site is generated using [Docusaurus](https://docusaurus.io).

This section contains information on how to built, use and edit the site. To help you quickly edit the site, some tips are below:

- The book content is at [./docs/](./docs/)
- The menu structure is defined at [sidebars.js](sidebars.js).

### Building the Website

To setup dependencies, run:

```sh
make setup
```

To serve the site locally, run:

```sh
make serve
```

To build the site, run:

```sh
make build
```

The built site is generated at `./website/public`.

Note that the [`samples`](./samples) folder is automatically zipped up and added to the website, meaning it can be downloaded directly from:

```
https://effective-shell.com/downloads/effective-shell-samples.zip
https://effective-shell.com/downloads/effective-shell-samples.tar.gz
```

### Updating the Theme

The site uses the [github.com/dwmkerr/hugo-book](https://github.com/dwmkerr/hugo-book) theme, which is a fork of [alex-shpak](https://github.com/alex-shpak/hugo-book).

## Versioning

The version of the site and the code is defined in the [`version.txt`](./version.txt) file. This makes it reasonably straightforward to script actions which require the version.

Releasing in managed via [Release Please](https://github.com/googleapis/release-please) in the [`release-please.yaml`](./.github/workflows/release-please.yaml) workflow file.

## Contributing

Please carefully read the [Contributing Guide](./.github/contributing.md) before working on changes.

## Copyright & Licensing

All content is Copyright (©) Dave Kerr. Please get in touch by opening an issue if you have questions on copyright or licensing.

[![Creative Commons BY-NC-SA](https://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/3.0/)

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License](http://creativecommons.org/licenses/by-nc-sa/3.0/).

## Transitioning to Docusaurus

The folder (`./effective-shell`)[./effective-shell] contains a work-in-progress refactor of the website to use the [Docusaurus](https://docusaurus.io/) static site generator.

The build currently deploys side-by-side with the existing site, deploying to a subfolder named `effective-shell`:

https://effective-shell.com/effective-shell

### Transformations

To transform image tags to suit Docusaurus, from:

```html
<img alt="Screenshot: Cygwin Setup" src="images/cygwin-8.png" width="400px" />
```

to:

```jsx
<img alt="Screenshot: Cygwin Setup" src="images/cygwin-8.png" width="400px" />
```

Use this pattern in Visual Studio Code (regex search and replace):

| Search                                         | Replace                               |
|------------------------------------------------|---------------------------------------|
| `src="[\./]*images(.*?)"`                      | `src={require('./images$1').default}` |
| `\{\{<[ ]*relref "\/docs\/(.*?)"[ ]*>[ ]*\}\}` | `../../$1`                            |
| `\{\{< hint info >\}\}\n\*\*(.*?)\*\*`         | `:::tip $1\n`                         |
| `\{\{< /hint >\}\}`                            | `\n:::`                               |
| `<Three backticks>`                            | `<Three backticks>bash`               |

### Task List

This is a short-and-sweet task list for the refactoring process.

- [x] Mailchimp signup form
- [x] Google Analytics
- [x] Merge index and introduction pages
- [x] Getting Started Page
- [x] Part 1
- [x] Build
- [x] Deploy
- [x] Test deployment
- [x] Fix hints
- [x] Part 2, migrate and preview
- [x] Part 3, migrate and preview
- [x] Part 4, migrate and preview
- [x] Part 5, migrate and preview
- [x] Part 6, migrate and preview
- [x] Create a really nice animation: https://starship.rs/ also look at a yes no question, 'become a shell expert' or something
- [x] Fixup table of contents
- [x] Fixup appendix/todo/missing chapters
- [x] Fix relref links
- [x] Fix TODOs
- [x] Test grep styling and relrefs
- [x] Ensure that google analytics integration is working.
- [x] Replace `version.txt` to `package.json`
- [ ] Remove old files
- [ ] Build
- [ ] Deploy
- [ ] Test deployment
- [ ] Remap google analytics routes (i.e. remove `/docs/`

## Thanks!

Thanks to the following people who have helped with reviews, comments, suggestions.

- Andrew Bestbier, Thomas Neumann, Tam Nguyen, Rahul Maliakkal, Peter Mondlock, Samantha Baldwin, Niklas Schmuecker for the useful comments and suggestions
- [Ogus Ismail](https://stackoverflow.com/users/10248678/oguz-ismail) for helping me understand some of the [nuances of word splitting and filename expansion](https://stackoverflow.com/questions/67648392/how-can-i-confirm-whether-whitespace-or-special-characters-are-escaped-in-a-wild)
- [Josh Timmons](https://github.com/josh-59) for proof-reading and suggesting structural improvements as well as grammar and spelling fixes
