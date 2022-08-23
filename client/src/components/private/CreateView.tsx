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
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { ProductCreationModel } from "../../types";
import { addProduct } from "../../utils/apiCalls";
import ProductCard from "../ProductCard";

const CreateView: FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values: ProductCreationModel) => {
    let result = await addProduct(values);
    if (result === 201) {
      navigate("/admin");
    } else {
      console.log("Failed to add product");
    }
  };

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

  return (
    <Container>
      <Typography variant="h6">Edit View</Typography>
      <div className="flex justify-around">
        <Formik
          initialValues={{
            name: "",
            description: "",
            price: 0,
            stock: 0,
          }}
          validationSchema={schema}
          onSubmit={(values) => {
            handleSubmit(values);
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
                  New Product
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
                <ProductCard
                  product={{
                    id: 1234,
                    name: values.name,
                    description: values.description,
                    price: values.price,
                    stock: values.stock,
                  }}
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default CreateView;
