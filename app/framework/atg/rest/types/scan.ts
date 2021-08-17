import { BarcodeItem } from '@commerce/types'
import { CommerceType } from './commerce'

interface ATGBarcodeItem extends BarcodeItem {}

interface ATGBarcodeItemResp extends CommerceType {
  resp: ATGBarcodeItem[]
}

interface BarcodeAddToCartRes extends CommerceType {
  resp: BarcodeAddToCartItem
}

interface BarcodeAddToCartItem {
  failureCount?: number
  successCount?: number
  message: any
  success: boolean
}

interface BarcodeAddToCartReq {
  barcodes: string
}

export type {
  ATGBarcodeItemResp,
  BarcodeAddToCartRes,
  ATGBarcodeItem,
  BarcodeAddToCartReq
}
