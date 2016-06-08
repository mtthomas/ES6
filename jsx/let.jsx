import React from 'react'
import {expect} from 'chai'
import slide from './slide.jsx'

const babel = require("babel-core")

////////////
//let.jsx //
////////////
const esFiveExample = `function functionScope(){
  if(true){
    var message = "hello world";
  }

  expect(message).to.be.defined;
}`

const esSixExample = `function blockScope(){
  if(true){
    let message = "hello world"
  }

  expect(message).to.be.undefined
}`

const test = function(){
  if(true){
    let message = "hello world"
  }

  expect(message).to.be.defined
}

export default slide({
  title: "Block Scoping",
  esSixExample,
  esFiveExample,
  imageSource: "img/blocks.png",
  test
})
