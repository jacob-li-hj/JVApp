import { useQuery, UseQueryResult } from 'react-query'
import _ from 'lodash'
import fetchData from '@rest/common/fetch-data'

import { BarcodeItem } from '@commerce/types'
import { ATGBarcodeItemResp } from '@rest/types/scan'
import normalizeInfo from '@rest/lib/normalize-info'

export const queryKey = ['mock', 'info']

const useInfo = (): UseQueryResult<any> => {
  return useQuery(
    queryKey,
    async (): Promise<any> => {
      const data = await fetchData<ATGBarcodeItemResp>({
        url: 'https://httpstat.us/200',
        method: 'GET',
      })
      console.log('222222', data)
      return data
      // return resp.map(info => normalizeInfo(info))
    }
  )
}

export default useInfo
