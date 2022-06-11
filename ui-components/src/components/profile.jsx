import React from 'react'

const profile = (props) => {
    const account = props.account

    const name = account.name
    const username = account.username
    const bio = account.bio
    const isVerified = account.isVerified
  return (
    <div className='container'>
        <dl>
            <dt>Name: </dt>
            <dd>{name}</dd>
            <dt>Username: </dt>
            <dd>{username}</dd>
            <dt>Bio: </dt>
            <dd>{bio}</dd>
            <dt>Verified: </dt>
            <dd>{isVerified}</dd>
        </dl>
    </div>
  )
}

export default profile