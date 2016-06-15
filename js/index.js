Reveal.initialize({
    width: 1366,
    height: 768,
    margin: 0.1,
    center: false,
    progress: false,
    slideNumber: true,
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
