import React from 'react'
import { useMutation } from 'react-query'
import fetchData from '@rest/common/fetch-data'
import { BarcodeAddToCartReq, BarcodeAddToCartRes } from '@rest/types/scan'

export const queryKey = ['scan', 'code-info']

const useAddToCart = () => {
  const mutation = useMutation(
    async ({ barcodes }: BarcodeAddToCartReq) => {
      const data = await fetchData<BarcodeAddToCartRes>({
        url: 'addItemsToCartAPI',
        method: 'POST',
        data: {
          barcodes
        }
      })
      return data
    },
    {
      onSuccess: (data) => {
        // TODO
      }
    }
  )

  return mutation
}

export default useAddToCart
