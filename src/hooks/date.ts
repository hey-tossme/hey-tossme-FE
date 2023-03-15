export const date = (str: string) => {
    const strArr = str.split("T");
    return strArr[0] + ` ` + strArr[1].slice(0, 5);
};
