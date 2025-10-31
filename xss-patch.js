```javascript

// Patch XSS vulnerabilities

Object.defineProperty(Element.prototype, 'innerHTML', {

    set: function() {},

    configurable: false

});

Object.defineProperty(Element.prototype, 'outerHTML', {

    set: function() {},

    configurable: false

});
