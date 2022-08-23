import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Paper,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { Product } from "../../types";
import { getProductById, updateProduct } from "../../utils/apiCalls";
import ProductCard from "../ProductCard";

const EditView: FC = () => {
  const [product, setProduct] = useState<Product>();
  const [failedToUpdate, setFailedToUpdate] = useState(false);
  const [failedToFetch, setFailedToFetch] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    description: yup.string().required("Description is required"),
    price: yup
      .number()
      .required("Price must be a number")
      .moreThan(0.01, "Price must be more than 0.01"),
    stock: yup
      .number()
      .required("Stock is required")
      .moreThan(0, "Stock cannot be less than 0"),
  });

  const handleSubmitEdit = (values: Product) => {
    let result;
    product ? (result = updateProduct(product.id, values)) : null;

    result?.then((res) => {
      if (res.status === 201) {
        navigate("/admin");
      } else setFailedToUpdate(true);
    });
  };

  useEffect(() => {
    if (id) {
      getProductById(Number(id)).then((res) => {
        if (res.responseCode === 200) {
          setProduct(res.data);
        } else setFailedToFetch(true);
      });
    } else {
      setFailedToFetch(true);
    }
  }, [id]);

  if (product == undefined || failedToUpdate || failedToFetch) {
    return (
      <Container>
        <Typography variant="h6">Edit View</Typography>
        <Typography variant="body1">
          {failedToFetch ? "Failed to find item" : "Loading..."}
          {failedToUpdate ? "Failed to update item" : null}
        </Typography>
      </Container>
    );
  } else {
    return (
      <Container>
        <Typography variant="h6">Edit View</Typography>
        <div className="flex justify-around">
          <Formik
            initialValues={product}
            validationSchema={schema}
            onSubmit={(values) => {
              handleSubmitEdit(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form
                onSubmit={handleSubmit}
                className="flex justify-around w-100"
                noValidate
              >
                <div>
                  <Typography textAlign="center" variant="h6">
                    Edit
                  </Typography>
                  <Paper>
                    <div className="flex column edit-form">
                      <FormControl sx={{ marginBottom: "1rem" }}>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.name && touched.name ? (
                          <Typography variant="body2" color="error">
                            {errors.name}
                          </Typography>
                        ) : null}
                      </FormControl>
                      <FormControl sx={{ marginBottom: "1rem" }}>
                        <FormLabel htmlFor="description">Description</FormLabel>
                        <Input
                          id="description"
                          name="description"
                          type="text"
                          value={values.description}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.description && touched.description ? (
                          <Typography variant="body2" color="error">
                            {errors.description}
                          </Typography>
                        ) : null}
                      </FormControl>
                      <FormControl sx={{ marginBottom: "1rem" }}>
                        <FormLabel htmlFor="price">Price</FormLabel>
                        <Input
                          id="price"
                          name="price"
                          type="number"
                          value={values.price}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.price && touched.price ? (
                          <Typography variant="body2" color="error">
                            {errors.price}
                          </Typography>
                        ) : null}
                      </FormControl>
                      <FormControl sx={{ marginBottom: "1rem" }}>
                        <FormLabel htmlFor="stock">Stock</FormLabel>
                        <Input
                          id="stock"
                          name="stock"
                          type="number"
                          value={values.stock}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.stock && touched.stock ? (
                          <Typography variant="body2" color="error">
                            {errors.stock}
                          </Typography>
                        ) : null}
                      </FormControl>
                      <Button variant="contained" type="submit">
                        Submit
                      </Button>
                    </div>
                  </Paper>
                </div>
                <div>
                  <Typography textAlign="center" variant="h6">
                    Preview
                  </Typography>
                  <ProductCard product={values} />
                </div>
              </form>
            )}
          </Formik>
        </div>
      </Container>
    );
  }
};

export default EditView;
