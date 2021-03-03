import React from 'react'

import "./Logo.css"

import { ReactComponent as LogoSvg } from './logo.svg'

const Logo = () => {

  return (      
    <div className="text-blue-300">
        <LogoSvg className={'w-96 h-96 fill-current animate-spin-slow'}/>
    </div>
  )
}

export default Logo;