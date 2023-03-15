import profileImg from "../assets/images/profile-user.png";

export const customNullImg = (src: string) => {
    return src ? src : profileImg;
};
