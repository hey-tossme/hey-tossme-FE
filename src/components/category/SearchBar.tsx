import { useAppSelector } from "../../store/hooks/configureStore.hook";
import SelectKeyword from "./SelectKeyword";
import SelectLocation from "./selectLocation/SelectLocation";
import SelectPeriod from "./SelectPeriod";
import { getProductList } from "../../api/category/product";
import { SearchBarProps } from "./_Category.interface";

export default function SearchBar({ setItems }: SearchBarProps) {
    const searchType = useAppSelector((state) => state.search);

    const handleGetSearchResult = () => {
        getProductList(searchType, 1, 8).then((response) => {
            setItems(response.data.content);
        });
    };

    return (
        <div className="search-bar-group">
            <div className="search-bar-list">
                <SelectLocation />
                <SelectPeriod />
                <SelectKeyword />
            </div>
            <button onClick={handleGetSearchResult} className="search-btn">
                검색
            </button>
        </div>
    );
}
