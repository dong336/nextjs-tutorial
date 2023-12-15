import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Button } from "semantic-ui-react";
import logout from "./api/logout";

export default function Admin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    function checkLogin() {
      axios.get("/api/isLogin").then((res) => {
        if (res.status === 200 && res.data.name) {
          // 로그인
          setIsLogin(true);
        } else {
          // 로그인 안됨
          router.push("/login");
        }
      });
    }

    checkLogin();
  }, [router]);

  function logout() {
    axios.get("/api/logout").then((res) => {
      if (res.status === 200) {
        router.push("/");
      }
    });
  }

  return (
    <>
      admin
      {isLogin && <Button onClick={logout}>Logout</Button>}
    </>
  );
}
