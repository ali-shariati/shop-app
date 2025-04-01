export interface IProductItemProps {
    id: string,
    image: string,
    title: string,
    description: string,
    price: number,
}

export interface IProductList {
    first: number | null,
    prev: number |null,
    next: number | null,
    last: number | null,
    pages: number ,
    items: number | null,
    data : IProductItemProps[]
}