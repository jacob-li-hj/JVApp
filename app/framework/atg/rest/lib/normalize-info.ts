import { BarcodeItem } from '@commerce/types'
import { ATGBarcodeItem } from '@rest/types/scan'

const normalizeInfo= (item: ATGBarcodeItem): BarcodeItem =>
  //  Normalize barcode item from backend data to frontend data
  item

export default normalizeInfo
