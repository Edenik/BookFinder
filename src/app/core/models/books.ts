export class Book {
    id: string;
    buyLink?: string;
    saleability?: string;
    language?: string;
    pageCount?: number;
    printType: string;
    publishDate: string;
    title: string;
    publisher?: string;
    image: string;
}

export class ApiData {
    items: BookItem[];
    kind: string;
}

export class BookItem {
    id: string;
    volumeInfo: VolumeInfo;
    saleInfo: SaleInfo;
}

export class VolumeInfo {
    printType: string;
    publishedDate: string;
    title: string;
    imageLinks: Images;
    language: string;
    pageCount: number;
    publisher: string;
}

export class Images {
    thumbnail: string;
}

export class SaleInfo {
    buyLink: string;
    saleability: string;
}