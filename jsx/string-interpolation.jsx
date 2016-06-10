import slide from './slide.jsx'

const example = `function stringInterpolation(){
  let person = {
    firstName: "John",
    lastName: "Smith"
  }

  const message = \`\${person.firstName} \${person.lastName}\`

  expect(message).to.equal("John Smith")
}`

export default slide({
  esSixExample: example,
  image: "img/backquote.png",
  title: "String Interpolation"
})
