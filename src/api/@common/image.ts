import customAxios from "../customAxios";
import { useAppSelector } from "../../store/hooks/configureStore.hook";

const token = useAppSelector((state: any) => state.user.token);

// export const requestUploadImg = (frm) => {
//     customAxios({
//         method: "POST",
//         url: "/v2/members",
//         headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: token,
//         },
//         data: {
//         },
//     });
// };
