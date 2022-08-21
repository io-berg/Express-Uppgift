import { Button, Card, Typography, Paper, CardContent } from "@mui/material";
import { FC } from "react";
import { Product } from "../types";
import tempImgSmall from "../assets/temp-img-small.png";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card component={Paper} sx={{ maxWidth: 275 }}>
      <CardContent>
        <img className="product-img" src={tempImgSmall} alt={product.name} />

        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body1">{product.description}</Typography>
        <Typography variant="h5" fontWeight="bold" color="red">
          {product.price}:-
        </Typography>
        <Button
          variant="contained"
          sx={{ width: "100%", marginTop: 1 }}
          disabled={product.stock < 1}
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {product.stock < 1 ? "Out of stock" : "View"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
