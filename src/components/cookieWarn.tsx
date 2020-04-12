import React, { useState, useEffect } from "react";
import { Flex, Button, Text, Link } from "rebass";
import { withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";

export const CookieWarn = withRouter(
  ({ history }): JSX.Element => {
    const [cookies, setCookie] = useCookies(["dros"]);
    const [firstTimer, setFirstTimer] = useState(true);

    useEffect(() => {
      if (cookies && cookies["dros"]) {
        setFirstTimer(false);
      }
    }, [setFirstTimer, cookies]);

    const onClickCookies = () => {
      const cookieExp = new Date();
      cookieExp.setMonth(cookieExp.getMonth() + 4);

      setCookie("dros", "not_my_first_time", { expires: cookieExp });
    };
    return (
      <>
        {firstTimer && (
          <Flex
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
              variant: "styles.footer",
              position: "fixed",
              left: 0,
              bottom: 0,
              width: "100%",
              bg: "tomato",
              color: "white",
              textAlign: "center",
            }}
          >
            <Text
              fontSize={[1, 1, 1, 1, 1, 1, 1]}
              textAlign="center"
              width="100%"
            >
              Esta web utiliza 'cookies' propias y de terceros para ofrecerte
              una mejor experiencia y servicio. Al navegar o utilizar nuestros
              servicios, aceptas el uso que hacemos de las 'cookies'.
            </Text>
            <Link
              onClick={() => {
                history.push("/privacy");
              }}
              sx={{ cursor: "pointer", pt: "2" }}
            >
              <b> Mas informacion</b>
            </Link>

            <Flex width="100%" justifyContent="center" pt="4">
              <Button color="#0F07B2" onClick={onClickCookies}>
                Entendido
              </Button>
            </Flex>
          </Flex>
        )}
      </>
    );
  }
);
