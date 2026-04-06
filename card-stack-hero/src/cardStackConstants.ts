/**
 * Layout: idle = horizontal fan; selected = featured card top + 4 small cards bottom (split).
 * Card shell is always 228×288; motion uses transform only (scale / translate / rotate).
 */

export const CARD_COUNT = 5

export const NARROW_BREAKPOINT_PX = 480

export const CARD_WIDTH_PX = 228
export const CARD_HEIGHT_PX = 288

export const FRAME_MAX_WIDTH_PX = 720
export const FRAME_ASPECT_RATIO = 2.35
export const FRAME_MIN_HEIGHT_PX = 340
/** Taller mount when a card is open (room for hero + bottom strip) */
export const FRAME_MIN_HEIGHT_SPLIT_PX = 580

export type StackSlotTransform = {
  x: number
  y: number
  rotate: number
  scale: number
  zIndex: number
}

/** Selected state: one hero transform + four slots for the remaining cards (left→right). */
export type SplitLayoutConfig = {
  active: {
    x: number
    y: number
    rotate: number
    scale: number
  }
  peerSlots: StackSlotTransform[]
}

export type LayoutProfile = {
  cardWidth: number
  cardHeight: number
  stagePadding: number
  restStack: StackSlotTransform[]
  splitLayout: SplitLayoutConfig
}

const STAGE_PADDING_DEFAULT = 44
const STAGE_PADDING_NARROW = 22

/**
 * Idle fan — matches reference: pivot from top so bottoms spread; left CCW → right CW.
 * Uneven x offsets (slightly wider gap toward the right); rotations ~-7° … +9°.
 * Pair with `transform-origin: top center` on the motion layer when idle.
 */
export const LAYOUT_DEFAULT: LayoutProfile = {
  cardWidth: CARD_WIDTH_PX,
  cardHeight: CARD_HEIGHT_PX,
  stagePadding: STAGE_PADDING_DEFAULT,
  restStack: [
    { x: -82, y: 6, rotate: -7, scale: 1, zIndex: 1 },
    { x: -40, y: 2, rotate: -3, scale: 1, zIndex: 2 },
    { x: 0, y: -2, rotate: 0, scale: 1, zIndex: 3 },
    { x: 42, y: 2, rotate: 4, scale: 1, zIndex: 4 },
    { x: 88, y: 6, rotate: 9, scale: 1, zIndex: 5 },
  ],
  splitLayout: {
    active: { x: 0, y: -158, rotate: 0, scale: 1.38 },
    /** Bottom strip: ~28–32px between centers on screen (tight stack, 70%+ overlap). */
    peerSlots: [
      { x: -42, y: 178, rotate: -5, scale: 0.46, zIndex: 1 },
      { x: -14, y: 180, rotate: -1, scale: 0.46, zIndex: 2 },
      { x: 14, y: 176, rotate: 2, scale: 0.46, zIndex: 3 },
      { x: 42, y: 174, rotate: 5, scale: 0.46, zIndex: 4 },
    ],
  },
}

export const LAYOUT_NARROW: LayoutProfile = {
  ...LAYOUT_DEFAULT,
  stagePadding: STAGE_PADDING_NARROW,
  restStack: [
    { x: -54, y: 4, rotate: -7, scale: 1, zIndex: 1 },
    { x: -26, y: 1, rotate: -3, scale: 1, zIndex: 2 },
    { x: 0, y: -1, rotate: 0, scale: 1, zIndex: 3 },
    { x: 28, y: 1, rotate: 4, scale: 1, zIndex: 4 },
    { x: 58, y: 4, rotate: 9, scale: 1, zIndex: 5 },
  ],
  splitLayout: {
    active: { x: 0, y: -118, rotate: 0, scale: 1.2 },
    peerSlots: [
      { x: -30, y: 148, rotate: -4, scale: 0.4, zIndex: 1 },
      { x: -10, y: 150, rotate: 0, scale: 0.4, zIndex: 2 },
      { x: 10, y: 148, rotate: 2, scale: 0.4, zIndex: 3 },
      { x: 30, y: 146, rotate: 4, scale: 0.4, zIndex: 4 },
    ],
  },
}

/** Spring — CSS-friendly timing via Framer (transform under the hood) */
export const STACK_MOTION_TRANSITION = {
  type: 'spring' as const,
  stiffness: 280,
  damping: 34,
  mass: 0.9,
}

export const STACK_MOTION_TRANSITION_REDUCED = {
  type: 'tween' as const,
  duration: 0.01,
}
