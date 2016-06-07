import React from 'react'
import slide from './slide.jsx'

const esSixExample = `function blockScope(){
  for(let index = 0; index < 10; index += 1){
    //...
  }

  //ERROR: index is scoped/contained to the for loop
  newIndex = index - 10

  if(...){
    let message = "hello world"
  }

  //ERROR: message is scoped/contained to the if statement
  message = "goodnight world"

}`

const esFiveExample = `function functionScope(){
  for(var index = 0; index < 10; index += 1){
    //...
  }

  if(...){
    var message = "hello world";
  }

  index = index - 10;
  message = "goodnight world";
}`

const test = function(){
  
}

export default slide({
  title: "Block Scoping",
  esSixExample,
  esFiveExample,
  imageSource: "img/blocks.png"
})
