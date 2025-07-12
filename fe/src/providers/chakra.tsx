"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { system } from "@/theme/theme"
import { Props } from "@/types/common"

export function ChakraProviderWrapper({ children }: Props) {
  return (
    <ChakraProvider value={system}>
        {children}
    </ChakraProvider>
  )
}
