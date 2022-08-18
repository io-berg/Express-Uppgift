import { Container } from "@mui/material";
import React, { FC, useEffect } from "react";
import { Product } from "../types";
import { getAllProducts } from "../utils/apiCalls";
import ProductTable from "./ProductTable";


interface ShopViewProps {};

const ShopView: FC<ShopViewProps> = ({}) => {
    const [products, setProducts] = React.useState<Product[]>([]);

    useEffect(() => {
        getAllProducts().then(setProducts);
    }, []);

    return (
        <Container>
        <h1>Shop View</h1>
        <ProductTable products={products} />
        </Container>
    );
}

export default ShopView;