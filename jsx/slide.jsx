import React from 'react'

const slide = ({title, esFiveExample, esSixExample, test, imageSource}) => {
    class Slide extends React.Component {
        constructor(props) {
            super(props)
            this.handleTestClick = this.handleTestClick.bind(this)
        }
        handleTestClick() {
            test()
        }
        render() {
            return (
                <section>
                  <section>
                      <h2>{title}</h2>
                      <img src={imageSource} alt={title}></img>
                  </section>
                  <section>
                      <h2>ES5</h2>
                      <pre><code data-trim class="js">{esFiveExample}</code></pre>
                  </section>
                  <section>
                      <h2>ES6</h2>
                      <pre><code data-trim class="js">{esSixExample}</code></pre>
                      <div>
                          <button type="button" onClick={this.handleTestClick}>Execute</button>
                      </div>
                  </section>
                </section>
            )
        }
    }

    return Slide
}

export default slide
