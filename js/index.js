Reveal.initialize({
    width: 1366,
    height: 768,
    dependencies: [
        // Syntax highlight for <code> elements
        {
            src: 'ext/reveal/plugin/highlight/highlight.js',
            async: true,
            callback: function() {
                hljs.initHighlightingOnLoad();
            }
        }, {
            src: 'ext/reveal/plugin/external/external.js',
            condition: function() {
                return !!document.querySelector('[data-external]');
            }
        }
    ]
});
