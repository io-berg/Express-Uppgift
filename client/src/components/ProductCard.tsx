import { Button, Card, CardContent, Paper, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import tempImgSmall from "../assets/temp-img-small.png";
import { Product } from "../types";
import "./productCard.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card component={Paper} sx={{ maxWidth: 275 }}>
      <CardContent sx={{ height: "100%" }}>
        <div className="flex column justify-between h-100">
          <div>
            <img
              className="product-img"
              src={tempImgSmall}
              alt={product.name}
            />

            <Typography variant="h6">{product.name}</Typography>
            <Typography variant="body1">{product.description}</Typography>
          </div>
          <div>
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
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
