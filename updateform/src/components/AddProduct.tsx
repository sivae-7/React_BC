import React, { useState } from 'react';
import { Autocomplete, Box, TextField, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import productCategories from '../data/productCategories.json'; 
import productData from '../data/products.json'; 

type FormInput = {
  productType: string;
  productName: string;
  flavour: string;
  size: string;
};

const AddProduct = () => {
  const { control, handleSubmit, watch } = useForm<FormInput>();
  const [products, setProducts] = useState(productData.products);
  const productType = watch('productType');

  const onSubmit = async (data: FormInput) => {
    const newProduct = {
      id: products.length + 1,
      category: data.productType,
      name: data.productName,
      flavours: [data.flavour],
      sizes: [{ size: data.size, price: 0 }],
    };

    setProducts([...products, newProduct]);
    console.log('Updated Products:', products);
  };

  return (
    <Box >
      <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex", flexDirection:"column",width:"30rem",gap:"2rem"}}>
        <Controller
          name="productType"
          control={control}
          defaultValue=""
          rules={{ required: 'Product Type should be selected' }}
          render={({ field }) => (
            <Autocomplete
              {...field}
              options={productCategories}
              onChange={(_, value) => field.onChange(value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Product Type"
                  variant="outlined"
                  required
                />
              )}
            />
          )}
        />

        {productType && (
          <Controller
            name="productName"
            control={control}
            defaultValue=""
            rules={{ required: 'Product Name is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Product Name"
                variant="outlined"
                required
              />
            )}
          />
        )}

        {productType && (
          <Controller
            name="flavour"
            control={control}
            defaultValue=""
            rules={{ required: 'Flavour is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Flavour"
                variant="outlined"
                required
              />
            )}
          />
        )}

        {productType && (
          <Controller
            name="size"
            control={control}
            defaultValue=""
            rules={{ required: 'Size is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Size"
                variant="outlined"
                required
              />
            )}
          />
        )}

        <Button type="submit" variant="contained" color="primary">
          Add Product
        </Button>
      </form>
    </Box>
  );
};

export default AddProduct;
