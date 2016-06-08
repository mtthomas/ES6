import React from "react"
const babel = require("babel-core")
const es2015 = require("babel-preset-es2015")
import {AssertionError} from "chai"

function executeCode(code){
  try {
      eval(code)
      console.log("pass")
  } catch (e) {
      if (e instanceof AssertionError) {
          console.log(e)
      } else {
          console.log(e)
      }
  }
}

const slide = ({title, esFiveExample, esSixExample, test, imageSource}) => {
    class Slide extends React.Component {
        constructor(props) {
            super(props)
            this.handleES6Click = this.handleES6Click.bind(this)
            this.handleES5Click = this.handleES5Click.bind(this)
            this.transformed = babel.transform(esSixExample, {presets: [es2015]})
        }
        handleES5Click() {
          executeCode(esFiveExample)
        }
        handleES6Click() {
            executeCode(this.transformed.code)
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
                        <pre><code data-trim className="js">{esFiveExample}</code></pre>
                        <div>
                            <button type="button" onClick={this.handleES5Click}>Execute</button>
                        </div>
                        <h3 className="pass">
                          PASS
                        </h3>
                        <h3 className="fail">
                          FAIL
                        </h3>
                    </section>
                    <section>
                        <h2>ES6</h2>
                        <pre><code data-trim className="js">{esSixExample}</code></pre>
                        <div>
                            <button type="button" onClick={this.handleES6Click}>Execute</button>
                        </div>
                    </section>
                    <section>
                        <h2>Transpiled ES6</h2>
                        <pre><code data-trim className="js">{this.transformed.code}</code></pre>
                    </section>
                </section>
            )
        }
    }

    return Slide
}

export default slide
