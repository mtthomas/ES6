import slide from './slide.jsx'

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

export default slide({
  title: "Block Scoping",
  esSixExample,
  esFiveExample,
  imageSource: "img/block.svg",
})
