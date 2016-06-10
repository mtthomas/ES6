import React from "react"
const babel = require("babel-core")
const es2015 = require("babel-preset-es2015")

const slide = ({title, example, imageSource}) => {
    class Slide extends React.Component {
        constructor(props) {
            super(props)
            try{
              this.transformed = babel.transform(esSixExample, {presets: [es2015]}).code
            }catch(e){
              this.transformed = ""
            }
        }
        render() {
            return (
                <section>
                    <section>
                        <h2>ES5</h2>
                        <pre><code data-trim className="js">{this.transformed}</code></pre>
                    </section>
                    <section>
                        <h2>ES6</h2>
                        <pre><code data-trim className="js">{esSixExample}</code></pre>
                    </section>
                </section>
            )
        }
    }

    return Slide
}

export default slide
