import React from "react";
import Header from "../../components/header";
import Table from "wonder-table";
import { useFetch } from "../../utils/useFetch";
import "../../style/table.css";

export default function Employee() {
  const { isLoading, data } = useFetch("http://127.0.0.1:5000/api/");

  return (
    <section>
      <Header />
      {!isLoading && <Table list={data} />}
    </section>
  );
}
