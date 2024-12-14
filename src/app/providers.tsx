'use client'

import {NextUIProvider} from '@nextui-org/react'

interface Props {
  children: React.ReactNode
  className?: string
}

export const Providers: React.FC<Props> = (props) => {
  return (
    <NextUIProvider className={props.className}>
      {props.children}
    </NextUIProvider>
  )
}
