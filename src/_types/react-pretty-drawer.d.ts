declare module 'react-pretty-drawer' {
  import React from 'react'

  export type DrawerProps = {
    onClose: () => unknown
    visible: boolean
    placement?: 'top' | 'right' | 'bottom' | 'left'
    width?: string
    height?: string
    mask?: boolean
    maskStyle?: React.CSSProperties
    zIndex?: number
    style?: React.CSSProperties
    className?: string
    closable?: boolean
  }

  export declare const Drawer: React.FC<DrawerProps>
}
