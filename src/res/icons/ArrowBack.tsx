import React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

export default function ArrowBack({ color, ...props }: SvgProps) {
  return (
    <Svg height="40" viewBox="0 96 960 960" width="40" {...props}>
      <Path
        fill={color || 'black'}
        d="M480 896 160 576l320-320 47 46.666-240.001 240.001H800v66.666H286.999L527 849.334 480 896Z"
      />
    </Svg>
  )
}
