import React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

export default function ArrowForward({ color, ...props }: SvgProps) {
  return (
    <Svg height="24" viewBox="0 96 960 960" width="24" {...props}>
      <Path
        fill={color || 'black'}
        d="m321 976-71-71 329-329-329-329 71-71 400 400-400 400Z"
      />
    </Svg>
  )
}
