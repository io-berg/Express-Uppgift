import { Button, Dialog, DialogTitle, TextField } from "@mui/material";
import { FC } from "react";
import { Product } from "../types";

interface EditProductDialogProps {
  handleClose: () => void;
  product?: Product;
}

const EditProductDialog: FC<EditProductDialogProps> = ({
  handleClose,
  product,
}) => {
  const show = product ? true : false;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <Dialog open={show} onClose={handleClose}>
      <DialogTitle>Edit {product?.name}</DialogTitle>

      <TextField id="outlined-basic" placeholder="Name" />
      <TextField type="text" placeholder="Description" />
      <TextField type="text" placeholder="Price" />
      <TextField type="text" placeholder="Tags" />
      <Button variant="contained" type="submit">
        Save
      </Button>
    </Dialog>
  );
};

export default EditProductDialog;
