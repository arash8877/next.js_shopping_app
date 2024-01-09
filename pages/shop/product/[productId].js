import React from "react";
import style from "./[productId].module.css";
import { useRouter } from "next/router";
import Head from "next/head";

import { Button, Typography } from "@mui/material";
const Product = () => {
  const router = useRouter();

  return (
    <div className={style.div}>
      <Head>
        <title>Product with id {router.query.productId}</title>
      </Head>
      <Typography>Product with id {router.query.productId}</Typography>
      <img src={`/images/P${router.query.productId}.JPG`} />
      <Button variant={"contained"} color={"warning"}>Edit</Button>
    </div>
  );
};

export default Product;
