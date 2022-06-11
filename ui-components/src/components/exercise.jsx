import React from 'react'

const heading = React.createElement('h1',{id: "toyek",className: 'gg'},'Biodata Perusahaan')
const container = (<div className="container">
  <h1>react</h1>
  <p>berat juga ygy</p>
  </div>)
console.log(heading);
const Header = (props) => {
  const name = props.name
  const company = props.company
  return (
    <div>
        {heading}
        {container}
        Hello, {name} from {company}
    </div>
  )
}

export default Header