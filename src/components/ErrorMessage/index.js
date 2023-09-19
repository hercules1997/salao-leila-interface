import PropTypes from 'prop-types'
import React from 'react'

import { ErrorMessageStyles } from './style'

export function ErrorMessage ({ children }) {
  return <ErrorMessageStyles>{children}</ErrorMessageStyles>
}

ErrorMessage.propTypes = {
  children: PropTypes.string
}
