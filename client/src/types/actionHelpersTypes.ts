export type TfItemDataOutput = {
  title: string;
  price: number;
  discountPrice: number;
  image: string;
  other: {
      field: string;
      value: unknown;
  }[]
}

export type TfItemDataInput = {
  itemTitle: string;
  itemPrice: string | number;
  itemDiscount: string | number;
  imageUrl: string;
  other: Record<string, string>
  oldImg?: string
  imageId: string | null
  id?: string
  category: string
  catName: string
}

export type CheckedFiltersType = {
  [key: string]: Record<string, boolean>
};

export type TfFilterToStringInput = {
  cat: string;
  min: string;
  max: string;
  checkedBrands: Record<string, boolean>
  checkedFilters: CheckedFiltersType
}

