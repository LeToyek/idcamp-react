import React from 'react'

const CardNote = () => {
  return (
    <div>
      <h4 id='title'>Title</h4>
      <h6 id='date'>Kamis,26 Desember 2022</h6>
      <p className='note'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab similique ut magni quidem blanditiis ex facere exercitationem! Hic omnis delectus porro accusamus tempore molestiae illo quisquam unde laudantium quis? Ratione!
      </p>
      <br />
      <button className='Delete'> Delete </button>
      <button className='Archive'> Archive</button>
    </div>
  )
}

export default CardNote