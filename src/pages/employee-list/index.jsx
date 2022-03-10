import React from "react";
import Header from "../../components/header";
import Table from "wonder-table";
import { mock } from "../../mock";

export default function Employee() {
  return (
    <section>
      <Header />
      <Table list={mock} />
    </section>
  );
}
