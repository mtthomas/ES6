
    // var $slides = $("#slides"),
    //     index = 0,
    //     sections = [],
    //     deferreds = []
    //
    // for (index = 0; index < slides.length; index += 1) {
    //     sections.push('');
    // }
    //
    // deferreds = slides.map(function(slide, index) {
    //     return $.get('slides/' + slide + '.html').done(function(data) {
    //         sections[index - 1] = data;
    //     });
    // });
    //
    // $.when.apply($, deferreds).then(function() {
    //     $slides.append(sections)
    // }, function() {
    //     console.log('failed to load the slides');
    // }).done(function() {
    //     // More info https://github.com/hakimel/reveal.js#configuration
    //
    // });

    Reveal.initialize({
        history: true,
        progress: false,
        width: '90%',
        // More info https://github.com/hakimel/reveal.js#dependencies
        dependencies: [{
            src: 'ext/reveal/plugin/highlight/highlight.js',
            async: false,
            callback: function() {
                hljs.initHighlightingOnLoad();
            },
        }, {
            src: 'ext/reveal/plugin/external/external.js',
            condition: function() {
                return !!document.querySelector('[data-external]');
            }
        }]
    });
