import React, { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";
import { useFetchGif } from "../hooks/useFetchGif";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGif(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeInLeft">{category}</h3>
      {loading && <p className="animate__animated animate__flash">Loading</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};