var dom = require('dom'),
    scrolling = require('scrolling'),
    visible = require('visible');

var init = function(element) {
    $el = dom(element);
    $el.each(function(el, i) {
        if (visible(el[0], true)) {
            el.addClass("already-visible"); 
        }
    });
    var displayArticles = function() {    
        $el.each(function(el, i) {
            if (visible(el[0], true)) {
                if (!el.hasClass("come-in")) {
                    el.addClass("come-in"); 
                }
            } 
        });
    }
    scrolling(displayArticles);
}


module.exports = init;