"use client";
import Image from "next/image";
import React from "react";
import { useQuery } from "@tanstack/react-query";
export default function Home() {
  // ! traditional way of fetching data on client side
  // const [data, setData] = React.useState(null);
  // const [loading, setLoading] = React.useState(true);
  // const [error, setError] = React.useState(null);
  
  // const fetchData = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10");
  //     const data = await response.json();
  //     setData(data);
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  
  // React.useEffect(() => {
  //   fetchData();
  // }, []);

  // ! using useQuery for data fetching

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["user-data"],
    queryFn: () => fetch("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10").then(res => res.json())
  })


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  else {
    return (
      <div>
        data: {JSON.stringify(data)}
      </div>
    );
  }
  
}
