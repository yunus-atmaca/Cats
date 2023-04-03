import React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

export default function Error({ color, ...props }: SvgProps) {
  return (
    <Svg height="48" viewBox="0 96 960 960" width="48">
      <Path
        fill={color || 'black'}
        d="M480 775q14 0 24.5-10.5T515 740q0-14-10.5-24.5T480 705q-14 0-24.5 10.5T445 740q0 14 10.5 24.5T480 775Zm-30-144h60V368h-60v263ZM330 936 120 726V426l210-210h300l210 210v300L630 936H330Zm25-60h250l175-175V451L605 276H355L180 451v250l175 175Zm125-300Z"
      />
    </Svg>
  )
}
