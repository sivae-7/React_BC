import React from "react";
import { useForm } from "react-hook-form"
import SelectProductType from "./SelectProductType";
import productCategories from "../data/productCategories.json"; // Import product categories

type FormInputs = {
  productType: string;
};

function AddProduct() {
  const { control, handleSubmit } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SelectProductType
        name="productType"
        control={control}
        label="Product Type"
        options={productCategories} // Use product categories from the JSON file
        rules={{ required: "Product type is required" }}
      />
      <input type="submit" />
    </form>
  );
}

export default AddProduct;