import { getServerSideProps } from "next/dist/build/templates/pages";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";

export default function Gnb() {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState<string>();

  useEffect(() => {
    if (router.pathname === "/") {
      setActiveItem("home");
    } else if (router.pathname === "/about") {
      setActiveItem("about");
    } else if (router.pathname === "/contact") {
      setActiveItem("contact");
    } else if (router.pathname === "/admin") {
      setActiveItem("admin");
    }
  }, [router]);

  function goLink(e: React.FormEvent, data: any) {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "about") {
      router.push("/about");
    }
  }

  return (
    <div>
      <Menu inverted>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={goLink}
        />
        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={goLink}
        />
        <Menu.Item
          name="Contact Us"
          active={activeItem === "contact"}
          onClick={() => {
            router.push("/contact");
          }}
        />
        <Menu.Item
          name="admin"
          active={activeItem === "admin"}
          onClick={() => {
            router.push("/admin");
          }}
        />
      </Menu>
    </div>
  );
}
