import React from 'react'
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Logo.css"

import { ReactComponent as LogoSvg } from './logo.svg'

const logoClasses = size =>
  classNames({
    'w-96 h-96': !size || size === 'xl',
    'w-48 h-48': size === 'lg',
    'w-16 h-16': size === 'md',
    'w-12 h-12': size === 'sm',
    'fill-current animate-spin-slow': true
  })

const Logo = ({ size }) => {

  return (      
    <div className="text-blue-300">
        <LogoSvg className={logoClasses(size)}/>
    </div>
  )
}

Logo.protoTypes = {
  size: PropTypes.string,
}
export default Logo;