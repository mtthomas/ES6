// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    history: true,
    progress: false,
    width: '90%',
        // More info https://github.com/hakimel/reveal.js#dependencies
    dependencies: [{
        src: 'plugin/highlight/highlight.js',
        async: true,
        callback: function() {
            hljs.initHighlightingOnLoad();
        }
    }]
});
