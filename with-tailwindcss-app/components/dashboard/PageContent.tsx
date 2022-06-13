import {Box, Container, Heading, useColorModeValue as mode} from '@chakra-ui/react'
import * as React from 'react'
import {TableActions} from "../tableMemosyncLicense/TableActions";
import {TableContent} from "../tableMemosyncLicense/TableContent";
import {TablePagination} from "../tableMemosyncLicense/TablePagination";

export const PageContent = () => {
  return (
    <Box as="main" py="8" flex="1">
      <Container maxW="7xl">
        <Box bg={mode('white', 'gray.700')} p="6" rounded="lg" shadow="base">
            <Box as="section" py="12">
                <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
                    <Box overflowX="auto">
                        <Heading size="lg" mb="6">
                            Лицензии Memosync
                        </Heading>
                        <TableActions />
                        <TableContent />
                        <TablePagination />
                    </Box>
                </Box>
            </Box>
        </Box>
      </Container>
    </Box>
  )
}
