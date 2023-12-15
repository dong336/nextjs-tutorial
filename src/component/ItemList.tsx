import { IList } from "@/pages";
import Image from "next/image";
import React from "react";
import { Grid } from "semantic-ui-react";
import styles from "./ItemList.module.css";
import Link from "next/link";

export default function ItemList({ list }: IList) {
  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column key={item.id}>
              <Link href="/detail/[id]" as={`/detail/${item.id}`}>
                <div className={styles.wrap}>
                  <Image
                    src={item.image_link}
                    alt={item.name}
                    width={150}
                    height={150}
                    className={styles.img_item}
                  />
                  <strong className={styles.tit_item}>{item.name}</strong>
                  <div className={styles.txt_info}>
                    {item.category} {item.product_type}
                  </div>
                  <strong className={styles.num_price}>${item.price}</strong>
                </div>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
