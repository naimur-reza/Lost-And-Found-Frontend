"use client";

import { useGetMyLostItemsQuery } from "@/redux/api/lostItemsApi";

const MyLostItems = () => {
  const { data } = useGetMyLostItemsQuery({});

  console.log(data);

  return (
    <div>
      <h1> This is MyLostItems component </h1>
    </div>
  );
};

export default MyLostItems;
