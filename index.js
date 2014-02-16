var dom = require('dom'),
    scrolling = require('scrolling'),
    visible = require('visible');

var elements = [];

var loop = function() { 
    for (e in elements) {
        elements[e].each(function(el, i) {
            if (visible(el[0], true)) {
                if (!el.hasClass("come-in") && !el.hasClass("already-visible")) {
                    el.addClass("come-in"); 
                }
            } 
        });
    }
}

var init = function(element) {
    $el = dom(element);
    $el.each(function(el, i) {
        if (visible(el[0], true)) {
            el.addClass("already-visible"); 
        }
    });
    elements.push($el);
}

scrolling(loop);

module.exports = init;