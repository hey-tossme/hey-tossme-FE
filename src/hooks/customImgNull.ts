import profileImg from "../assets/images/profile-user.png";
import itemImg from "../assets/images/default-image.png";

export const customNullImg = (src: string) => {
    return src ? src : profileImg;
};

export const customNullItemImg = (src: string) => {
    return src ? src : itemImg;
};
