import React from 'react'

import Title from './title.jsx'
import Introduction from './introduction.jsx'
import JsHistory from './js-history.jsx'
import Es6Overview from './es6-overview.jsx'
import Babel from './babel.jsx'
import Semicolons from './semicolons.jsx'
import Let from './let.jsx'

export default class Slides extends React.Component {
  componentDidMount(){
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
    })
  }
  render(){
    return (
      <div className="slides">
        <Title />
        <Introduction />
        <JsHistory />
        <Es6Overview />
        <Babel />
        <Semicolons />
        <Let />
      </div>
    )
  }
}
