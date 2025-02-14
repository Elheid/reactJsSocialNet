
const publicUrl = import.meta.env.BASE_URL;

export const DEFAULT_AVATAR_IMG = `${publicUrl}img/profileIcon.webp`;
export const DEFAULT_WALLPAPER_IMG = `${publicUrl}img/wallpaper.png`;

export enum MessageType {
    User = "my-message",
    Other = "other-message",
}