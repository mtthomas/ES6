import React from 'react'

`function functionScope(){
  for(var index = 0; index < 10; index += 1){
    
  }
}`

return () => {
  <section>
      <h2 class="keyword">var</h2>
      <pre><code data-trim class="js">
  function functionScope(){
    for(var index = 0; index < 10; index += 1){
      //execute logic
    }

    //newIndex is equal to 0
    var newIndex = index - 10;
  }
          </code></pre>
  </section>
}
