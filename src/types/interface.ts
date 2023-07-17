export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  addedBy: string | null;
}

export interface IWishlist {
  email: string
  books: IBook[]
}