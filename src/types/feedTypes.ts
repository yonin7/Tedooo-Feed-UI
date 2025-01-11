export interface FeedItem {
  id: string;
  userName: string;
  shopName: string;
  text: string;
  images: string[];
  likes: number;
  comments: number;
  liked: boolean;
}
