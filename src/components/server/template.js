import React from 'react'

const Template = ({ children, jsBundle, title, description }) => {
  return (
    <html>
      <head>
        <title>{title || ''}</title>
        <meta description={description || ''} />
      </head>
      <body>
        <div id="app">{children}</div>
        <script src={jsBundle || ''} />
      </body>
    </html>
  )
}

export default Template
