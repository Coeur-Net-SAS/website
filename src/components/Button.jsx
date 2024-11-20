import React from 'react'

const redirect = (link) => {
  window.location.href = `${link}`
}

const Button = ({ styles, text, link }) => {
  return (
    <a href={link}>
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      {`${text}`}
    </button>
    </a>
  )
}

export default Button
