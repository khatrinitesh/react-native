import React from 'react'

const FooterComponent = () => {
  const currentyear = new Date().getFullYear();
  return (
    <footer>
      <p>{currentyear}</p>
    </footer>
  )
}

export default Footer
