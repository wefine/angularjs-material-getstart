# angularjs-material-getstart


### Step #1:
Here you will modify the application to use Angular-Material.
* In the HTML, load the Angular Material CSS stylesheet and appropriate `<meta>/<title>` tags   
* Load the Angular Material JS library and its dependent libraries   
* Configure the app dependency on 'ngMaterial'   

### Step #2:

Here we will use the wireframe planning and layout to identify the components and attributes needed.

* Add the `<md-toolbar>`, `<md-sidenav>`, and `<md-content>` containers

> Note: The `<md-sidenav>` is the container for the Users master list view, and the <md-content> is the container for the User detail view.

* Add the layout and flex attributes to configure the container layouts and sizing aspects

* Use `md-is-locked-open` to lock the `sidenav` open on the left
* Use the `md-whiteframe-4dp` class to add a shadow the the `sidenav`

### Step #3:

Here you will use hard-coded elements to confirm rendering and layout of the container child elements and Angular Material components.

### Step #4:
Here you integrate your custom, application logic.
* app.js internally loads the Users module
* users.module.js defines your data services and the ContactSheet.html view (remember that this is provided by the tutorial)
* index.controller.js contains your custom application logic (also provided for your convenience)


## references
1. [angular-material-start](https://github.com/angular/material-start)