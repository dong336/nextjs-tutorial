import axios from "axios";
import React from "react";
import Item from "@/src/component/Item";
import Head from "next/head";

export default function Post({ item, name }: any) {
  return (
    <div>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경입니다!!
          <Item item={item} />
        </>
      )}
    </div>
  );
}

// node.js 서버에서 런타임
export async function getServerSideProps(context: any) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}

/*
  Nextjs 는 모든 페이지를 사전 렌더링 한다(pre-rendering)
  더 좋은 퍼포먼스, SEO 최적화
  
  1. 정적 생성
  2. SSR(동적 렌더링)

  차이점은 언제 html 을 생성하는가

  정적 생성:
  -프로젝트가 빌드하는 시점
  -모든 요청에 재사용
  -퍼포먼스 이유로 Nextjs는 정적 생성을 권고
  -페이지들을 CDN에 캐시
  -getStaticProps / getStaticPaths

  SSR:
  -매 요청마다 html을 생성
  -항상 최신 상태 유지
  -getServerSideProps
 */
