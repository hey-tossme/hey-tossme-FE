export const validateEmail = (email: string) => {
    const regex =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return regex.test(email);
};

export const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
};

export const removeWhitespace = (text: string) => {
    const regex = /\s/g;
    return text.replace(regex, "");
};

export const validateTime = (time: string) => {
    const regex = /^(0[1-9]|1[0-2]|):(0[1-9]|[0-5][0-9])$/;
    return regex.test(time);
};
