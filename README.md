bootless-template
=================

My LESS-based HTML5 template with some optional bootstrap stuff included.

If you end up using most of the bootstrap less files, it might be better to load
pre-compiled bootstrap.css from a CDN and then in styles.less just overwrite variables
from bootstrap/variables.less. Then, just use boostrap/mixins.less as needed.

styles.less
===========

Bootstrap
---------

Bootstrap is commented out at the bottom of the index.html or index.php:

```
<!-- <script src="assets/js/vendor/bootstrap.js"></script> -->
```


All site styles get imported in styles.less. Here are the default includes:

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

... only a very minimal amount of Bootstrap gets imported to start with. To use additional Bootstrap features,
multiple files usually have to be imported because of all the dependencies. The import code above is copy-and-pasted
from the first half of bootstrap.less and then some lines are commented out.


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
