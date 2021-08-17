import React from 'react'
import { useMutation } from 'react-query'
import fetchData from '@rest/common/fetch-data'
import { BarcodeAddToCartReq, BarcodeAddToCartRes } from '@rest/types/scan'

export const queryKey = ['scan', 'code-info']

const useAddToCart = () => {
  const mutation = useMutation(
    async ({ barcodes }: BarcodeAddToCartReq) => {
      const { success, status, resp } = await fetchData<BarcodeAddToCartRes>({
        url: 'addItemsToCartAPI',
        method: 'POST',
        data: {
          barcodes
        }
      })
      return { success: success && resp.success, status, resp }
    },
    {
      onSuccess: ({ success, resp }) => {
        // TODO
      }
    }
  )

  return mutation
}

export default useAddToCart
