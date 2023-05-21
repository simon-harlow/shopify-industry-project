import { createIcon } from '@chakra-ui/icons'

export const Arrow_back = createIcon({
  displayName: 'Arrow_back',
  viewBox: '0 0 24 24',
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      fill='black'
      d='M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z'
    />
  ),
})

export const Arrow_drop = createIcon({
  displayName: 'Arrow_drop',
  viewBox: '0 0 24 24',
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      fill='black'
      d='M7 10L12 15L17 10H7Z'
    />
  ),
})