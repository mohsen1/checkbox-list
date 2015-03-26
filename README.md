# `<checkbox-list>`

> A web component for listed checkboxes and optionally a "check all" checkbox

## Installation

1. Install using npm or Bower

    ```shell
    npm install checkbox-list
    ```

    ```shell
    bower install checkbox-list
    ```

2. Use HTML Import 
    
    In your `<head>`:

    ```html
    <link rel="import" href="checkbox-list/dist/index.html">
    ```
3. Use `CheckboxListElement` element in HTML or programmability 
    
    **HTML**
    ```html
    <checkbox-list>
        <label><input checkbox-list-all="true" type="checkbox">All</label>
        <label><input type="checkbox">Checking</label>
        <label><input type="checkbox">Saving</label>
    </checkbox-list>
    ```

    **JavaScript**
    ```js
    var list = document.createElement('checkbox-list');
    
    var all = document.createElement('input');
    all.setAttribute('type', 'checkbox');
    all.setAttribute('checkbox-list-all', 'true');

    var checking = document.createElement('input');
    checking.setAttribute('type', 'checkbox');

    var saving = document.createElement('input');
    saving.setAttribute('type', 'checkbox');

    list.appendChild(all);
    list.appendChild(checking);
    list.appendChild(saving);

    document.body.appendChild(list);

    ```

## Development

Make sure you have npm and Gulp installed. Following commands are available:

#### `gulp`
Make a new build

#### `gulp serve`
Starts a server and watches for changes to reload the browser.

## License
MIT

