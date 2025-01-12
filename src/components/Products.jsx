import axios from "axios";
import React, { useEffect, useState } from "react";
import "./products1.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const URL = "https://fakestoreapi.com/products";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setProducts(data);
        console.log(products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  });

  if (loading) return <h2 className="text-center">Loading...</h2>;

  return (
    <>
      <h1 className="text-center mt-5">Products</h1>
      <div className="container d-flex flex-wrap justify-content-center">
        {products.map((product) => (
          <Card
            key={product.title}
            sx={{ maxWidth: 345 }}
            className="mb-2 me-2 border border-solid border-black"
          >
            <CardMedia
              className="productImage"
              sx={{ height: 140 }}
              image={product.image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                ${product.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rating:
                {product.rating.rate}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Products;
