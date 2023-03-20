import profileImg from "../assets/images/profile-user.png";
import itemImg from "../assets/images/default-image.png";

export const commaNums = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const customNullImg = (src: string) => {
    return src ? src : profileImg;
};

export const customNullItemImg = (src: string) => {
    return src ? src : itemImg;
};

export const date = (str: string) => {
    const strArr = str.split("T");
    return strArr[0] + ` ` + strArr[1].slice(0, 5);
};
