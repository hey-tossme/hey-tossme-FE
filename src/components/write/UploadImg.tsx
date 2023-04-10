import { requestUploadItemImg } from "../../api/@common/image";
import nullImg from "../../assets/images/default-image.png";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import imageCompression from "browser-image-compression";
import { uploadImgProps } from "./_write.interface";

export default function UploadImg({ imageSrc, setImageSrc }: uploadImgProps) {
    const token = useAppSelector((state) => state.user.token);

    const onUpload = async (e: any) => {
        const file = e.target.files[0];
        const options = {
            maxSizeMB: 2,
            maxWidthOrHeight: 900,
        };
        try {
            const compressedFile = await imageCompression(file, options);
            const resizingFile = new File([compressedFile], file.name, { type: file.type });

            const promise = imageCompression.getDataUrlFromFile(compressedFile);
            promise.then((result) => {
                setImageSrc(result);
            });

            const imgFrm = new FormData();
            imgFrm.append("file", resizingFile);

            requestUploadItemImg(token, imgFrm).then((response) => {
                setImageSrc(response.data);
            });
        } catch (error) {
            return error;
        }
    };

    return (
        <form method="post" className="upload-img-form">
            <label htmlFor="choose-file">
                <img
                    src={imageSrc ? imageSrc : nullImg}
                    alt="profile-image"
                    className="upload-img"
                    loading="lazy"
                    style={{ objectFit: "cover" }}
                />
            </label>
            <input
                type="file"
                id="choose-file"
                name="choose-file"
                accept="image/*"
                className="hidden"
                onChange={(e) => onUpload(e)}
            />
        </form>
    );
}
