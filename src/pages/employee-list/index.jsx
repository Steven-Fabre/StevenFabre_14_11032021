import React from "react";
import Header from "../../components/header";
import Table from "wonder-table";
import { mock } from "../../mock";
import { useFetch } from "../../utils/useFetch";

export default function Employee() {
  const { isLoading, data } = useFetch("http://127.0.0.1:3000/api/");

  if (!isLoading) console.log(data);
  return (
    <section>
      <Header />
      <Table list={mock} />
    </section>
  );
}
