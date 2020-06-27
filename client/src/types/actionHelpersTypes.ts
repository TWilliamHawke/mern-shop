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
  other: {
    [key: string]: string
  };
  oldImg?: string
  imageId: string | null
  id?: string
  category: string
  catName: string
}

export type TfFilterToStringInput = {
  cat: string;
  min: number;
  max: number;
  checkedBrands: {
    [key: string]: boolean
  };
  checkedFilters: {
    [key: string]: {
      [key: string]: boolean
    }
  };
}

