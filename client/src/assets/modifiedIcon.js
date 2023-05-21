import { createIcon } from '@chakra-ui/icons'


//please note to make more icons use this and copy the svg path https://fontawesomeicons.com/svg/icons/house-door-fill

export const Chevron_right = createIcon({
    displayName: 'Chevron_right',
    viewBox: '0 0 24 24',
    // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
    path: (
      <path
        fill='black'
        d='M9.99997 6L8.58997 7.41L13.17 12L8.58997 16.59L9.99997 18L16 12L9.99997 6Z'
      />
    ),
  })
export const Home_icon = createIcon({
  displayName: 'Home_icon',
  viewBox: '0 0 16 16',
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
    fill='black'
    d='M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z'/> 
  ),
})
