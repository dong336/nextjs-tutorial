import React from "react";
import styles from "./Item.module.css";
import Image from "next/image";
import { Button, Header } from "semantic-ui-react";

export default function Item({ item }: any) {
  if (item) {
    const {
      name,
      image_link,
      price,
      updated_at,
      description,
      category,
      product_type,
      product_link,
    } = item;

    console.log(item);

    return (
      <div>
        <div className={styles.wrap}>
          <div className={styles.img_item}>
            <Image src={image_link} alt={name} width={150} height={150} />
          </div>
          <div className={styles.info_item}>
            <strong className={styles.tit_item}>{name}</strong>
            <strong className={styles.num_price}>${price}</strong>
            <span className={styles.txt_info}>
              {category ? `${category}/` : ""}
              {product_type}
            </span>
            <Button color="orange">구매하기</Button>
          </div>
          <Header as="h3">Description</Header>
          <p style={{ paddingBottom: 20, fontSize: 18 }}>{description}</p>
        </div>
      </div>
    );
  }
}
