export type Placement =
  | 'topLeft'
  | 'top'
  | 'topRight'
  | 'rightTop'
  | 'right'
  | 'rightBottom'
  | 'bottomRight'
  | 'bottom'
  | 'bottomLeft'
  | 'leftBottom'
  | 'left'
  | 'leftTop';

interface Placements {
  [key: string]: string[];
}

export const placements: Placements = {
  topLeft: ['tl', 'bl'],
  top: ['tc', 'bc'],
  topRight: ['tr', 'br'],
  rightTop: ['tr', 'tl'],
  right: ['cr', 'cl'],
  rightBottom: ['br', 'bl'],
  bottomRight: ['br', 'tr'],
  bottom: ['bc', 'tc'],
  bottomLeft: ['bl', 'tl'],
  leftTop: ['tl', 'tr'],
  left: ['cl', 'cr'],
  leftBottom: ['bl', 'br'],
};
