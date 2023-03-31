export interface CardInterface {
  id: number;
  title: string;
  description: string;
  price: number;
  coverImg: string;
  alt: string;
  stats: {
    rating: number;
    reviewCount: number;
  };
  location: string;
  openSpots: number;
}
