import ItemList from "@/src/component/ItemList";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Divider, Header, Loader } from "semantic-ui-react";

export interface IList {
  list: Iitem[];
}

export interface Iitem {
  id: number;
  name: string;
  image_link: string;
  category: string;
  price: string;
  product_type: string;
}

export default function Home({ list }: any) {
  const API_URL: any = process.env.NEXT_PUBLIC_API_URL;

  return (
    <div>
      <Head>
        <title>HOME | 홈</title>
        <meta name="description" content="홈 입니다."></meta>
      </Head>
      <div>
        <Header as="h3" style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0, 9)}></ItemList>
        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list.slice(9)}></ItemList>
      </div>
    </div>
  );
}

// SSR 로직
export async function getStaticProps() {
  const apiUrl: any = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
