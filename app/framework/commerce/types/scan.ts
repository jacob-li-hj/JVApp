interface InventoryStatus {
  currentStoreInventory?: number
  availabilityStatus?: string
}

interface BarcodeItem {
  subCategory?: string
  promotionType?: string
  quantity: string
  productId: string
  displayName: string
  shortageBannerTitle?: string
  pdpUrl?: string
  invStatus: InventoryStatus
  description: string
  skuPrice: string
  sellMultiplier: string
  isValidSku?: boolean
  type: string
  productCode: string
  notExisted?: boolean
  imageUrl: string
  category: string
  barcode: string
  skuId: string
  skuCount: number
  promotionValue?: string
  displayUom: string
  shortageBannerContent?: string
}

export type { BarcodeItem }
