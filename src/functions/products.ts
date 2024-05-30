
import { isDefinedArray } from "functions/isDefined";
import { ProductModel } from "src/models";
import { ProductType } from "src/types/product";

const TitleProductDictionary: Record<string, string> = {
  id: "",
  article: "Артикул",
  name: "Наименование",
  description: "Описание",
  price: "Цена"
};

export const notDisplayedProductProperies = ["id"];

export const mapProductDataToBodyProps = (data: ProductModel[]): ProductType[] => {
  if (!isDefinedArray(data)) {
    return [];
  }
  return data.map((product) => {
    const {id, ...otherProps} = product;
    return {
      id: id,
      displayedProps: Object.entries(otherProps)
    };
  });
};

export const mapProductDataToTableHeaderProps = (data: ProductModel[]): [string, string][] => {
  if (!isDefinedArray(data)) {
    return [];
  }
  return Object.entries(data[0]).reduce<[string, string][]>((acc, [key, _]) => {
    if (notDisplayedProductProperies.includes(key)) {
      return acc;
    }
    return [
      ...acc,
      [
        key, 
        TitleProductDictionary[key]
      ]
    ]
  }, []);
};

export const getProductsByArticles = (data: ProductModel[], articles: number[]) => {
  if (!isDefinedArray(articles)) {
    return data
  }
  return data.filter((product) => articles.includes(product.article))
}