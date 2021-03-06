bootless-template
=================

My LESS-based HTML5 template with some optional bootstrap stuff included.
This template is optimized for web development with PHP files or plain HTML.

The idea is that you really only need to use the build script for distribution.

During development, you can use
`grunt dev`
to compile the Less files, but I prefer to use my IDE's built-in Less compiler.


Build
=====

Development:
- grunt dev

Distribution:
- grunt dist


Compiling JavaScript Files Automatically
========================================

During development, add as many javascript files as you'd like as script references from your html.
Don't worry about concatenation nor minification. But, surround them with build/endbuild comments like so:

```
<!-- build:js assets/js/vendor/bootstrap.min.js -->
<script src="assets/js/vendor/bootstrap/alert.js"></script>
<script src="assets/js/vendor/bootstrap/button.js"></script>
<!-- endbuild -->
```

When you build for distribution all of the js files will be compressed into one, and the script tags
will be replaced with a single script tag.


styles.less
===========

All site styles get imported in styles.less. This section describes the files imported into styles.less by default...


Bootstrap
---------

Only a very minimal amount of Bootstrap gets imported to start with:

```
@import "bootstrap/variables";
@import "bootstrap/mixins";

// Reset
@import "bootstrap/normalize";
//@import "bootstrap/print.less";


// Core CSS
@import "bootstrap/scaffolding";
@import "bootstrap/type";
//@import "bootstrap/code.less";
//@import "bootstrap/grid.less";
//@import "bootstrap/tables.less";
//@import "bootstrap/forms.less";
//@import "bootstrap/buttons.less";

@import "semantic.gs/grid";
@import "semantic.gs/grid-fluid";

@import "lesshat/lesshat";
```

To use additional Bootstrap features, multiple files usually have to be imported because of all the dependencies.
The import code above is copy-and-pasted
from the first half of bootstrap.less and then some lines are commented out.

If you end up importing most of the bootstrap less files, it's probably better to load
pre-compiled bootstrap.css from a CDN and then in styles.less just overwrite variables
from bootstrap/variables.less. Then, just use boostrap/mixins.less as needed.


semantic.gs
-----------

```
@import "semantic.gs/grid";
@import "semantic.gs/grid-fluid";
```

guid-fluid is the same as grid with variables renamed by appending -fluid to the originals, and @total-width-fluid is set
to 100% by default. This way you can use fluid and responsive grids on the same page if you need to.


lesshat
-------

```
@import "lesshat/lesshat";
```


index
=====

