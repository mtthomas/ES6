import React from 'react'
import slide from './slide.jsx'


const esSixExample = `function constExample(){
  const message = "hello world"


}`

export default slide({
  title: (<span className="keyword">{"const"}</span>),
  esSixExample,
  esFiveExample: "",
  imageSource: "img/safe.svg"
})
