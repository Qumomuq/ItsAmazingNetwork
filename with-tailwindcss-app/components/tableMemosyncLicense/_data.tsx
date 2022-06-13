import {Badge, Box, Link, Text} from '@chakra-ui/react'
import * as React from 'react'
import { User } from './User'


const badgeEnum: Record<string, string> = {
  "-1": 'red',
  0: 'orange',
  1: 'green',
  2: 'orange',
}
const statusEnum: Record<string, string> = {
  "-1": 'Отключено',
  0: 'Ожидает установки...',
  1: 'Запущено',
  2: 'Обновление...',
}

export const columns = [
  {
    Header: 'Организация',
    accessor: ['organization', 'subdomain'],
    complex: true,
    Cell: function MemberCell(data: Record<string, any> | any) {
      return ( <>
          {/*<User data={data} />*/}
            <Box>
              <Box fontSize="sm" fontWeight="medium">
                {data.organization}
              </Box>
              <Box fontSize="sm" color="gray.500">
                <Link href={`https://${data.subdomain}.memosync.ru`}><>https://{data.subdomain}.memosync.ru</></Link>
              </Box>
            </Box>
        </>
      )
    }
  },
  {
    Header: 'Количество лицензий и стоимость',
    accessor: ['licenses', 'price_per_license'],
    complex: true,
    Cell: function PriceCell(data: Record<string, any> | any) {
      const pricePerMonth = data.licenses * data.price_per_license * 30 / 100
      return (
          <Box>
            <Box fontSize="sm" fontWeight="medium">
              Затраты в месяц {pricePerMonth} р.
            </Box>
            <Box fontSize="sm" color="gray.500">
              {data.licenses} лицензий по {data.price_per_license/100} р. в день
            </Box>
          </Box>
      )
    }
  },
  {
    Header: 'Статус',
    accessor: 'status',
    Cell: function StatusCell(data: any) {
      return (
        <Badge fontSize="xs" colorScheme={badgeEnum[data]}>
          {statusEnum[data]}
        </Badge>
      )
    }
  },
  {
    Header: 'Версия',
    accessor: 'product_version',
  },
]
