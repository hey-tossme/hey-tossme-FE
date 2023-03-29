import profileImg from "../assets/images/profile-user.png";
import itemImg from "../assets/images/default-image.png";

export const commaNums = (num: Number) => {
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

export const dashDate = (date: Date) => {
    const year = date.getFullYear();
    const month =
        date.getMonth() + 1 < 10 ? "0" + Number(date.getMonth() + 1) : date.getMonth() + 1;
    const targetDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    return `${year}-${month}-${targetDate}-${hour}-${minute}`;
};
