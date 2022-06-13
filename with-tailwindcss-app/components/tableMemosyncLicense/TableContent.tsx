import {
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { columns } from './_data'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useEffect} from "react";
import {useActions} from "../../hooks/useActions";

export const TableContent = () => {
    const licenses = useTypedSelector(state => state.licenses)

  return (
    <Table my="8" borderWidth="1px" fontSize="sm">
      <Thead bg={mode('gray.50', 'gray.800')}>
        <Tr>
          {columns.map((column, index) => (
            <Th whiteSpace="nowrap" scope="col" key={index}>
              {column.Header}
            </Th>
          ))}
          <Th />
        </Tr>
      </Thead>
      <Tbody>
        {licenses.licenses_data.map((row, index) => (
          <Tr key={index}>
            {columns.map((column, index) => {
                if (column.complex) {
                    let accessorsData: Record<string, any> = {}
                    column.accessor.map((access: string, index) => {
                        accessorsData[access] = row[access as keyof typeof row]
                       //return {'accessor': access, 'value': row[access as keyof typeof row]}
                    })
                    const element = column.Cell?.(accessorsData) ?? accessorsData
                    return (
                        <Td whiteSpace="nowrap" key={index}>
                            {element}
                        </Td>
                    )
                } else {
                    const cell = row[column.accessor as keyof typeof row]
                    const element = column.Cell?.(cell) ?? cell
                    return (
                        <Td whiteSpace="nowrap" key={index}>
                            {element}
                        </Td>
                    )
                }
            })}
            <Td textAlign="right">
              <Button variant="link" colorScheme="blue">
                Настроить
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
