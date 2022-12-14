import { Button, Container, Paper, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tempImg from "../assets/temp-img.png";
import { Product } from "../types";
import { getProductById } from "../utils/apiCalls";
import "./productView.css";

const ProductView: FC = () => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [failedToFetch, setFailedToFetch] = useState(false);
  const { id } = useParams();

  const handlePurchase = () => {
    alert("Puchase not implemented");
  };

  useEffect(() => {
    if (id) {
      getProductById(Number(id)).then((res) => {
        if (res.status === 200) {
          setProduct(res.data);
        } else setFailedToFetch(true);
      });
    } else {
      setFailedToFetch(true);
    }
  }, [id]);

  if (product == undefined) {
    return (
      <Container>
        <Typography variant="h6">Product View</Typography>
        <Typography variant="body1">
          {failedToFetch ? "Failed to find item" : "Loading..."}
        </Typography>
      </Container>
    );
  } else {
    return (
      <Container component={Paper} sx={{ paddingTop: 2, paddingBottom: 2 }}>
        <div className="flex productView-wrapper">
          <div className="productView-img-container">
            <img className="productView-img" src={tempImg} alt={product.name} />
          </div>
          <div className="productView-content justify-between">
            <div>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body1">{product.description}</Typography>
            </div>
            <div className="flex justify-between align-center">
              <Typography variant="h5" fontWeight="bold" color="red">
                {product.price}:-
              </Typography>
              <Button
                variant="contained"
                color="success"
                sx={{ marginTop: 1 }}
                onClick={handlePurchase}
              >
                Buy
              </Button>
            </div>
          </div>
        </div>
      </Container>
    );
  }
};

export default ProductView;
