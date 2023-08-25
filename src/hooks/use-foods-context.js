import { useContext } from "react";
import FoodsContext from "../context/foods";

function useFoodsContext() {
    return useContext(FoodsContext);
}

export default useFoodsContext;