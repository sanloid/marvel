export interface Favourite {
  id: string;
  name: string;
  description: string;
  location: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
