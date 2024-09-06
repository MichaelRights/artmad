import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Box, Grid, Typography } from "@mui/material";
import {
  IconBaselinePhone,
  IconLocationFilled,
  IconMailSolid,
  IconSm,
} from "../icons";
import "../styles/index.css";
import IconLg from "../icons/icon-lg.svg";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Box
        component="header"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py={2}
        boxShadow="#00000040 0px 4px 4px"
        px={{
          lg: 24,
          md: 12,
          sm: 10,
        }}
        style={{ background: "#9CAAC0" }}
      >
        <Box display="flex" gap={5} alignItems="center">
          <IconSm />
          <h2>ԱՐՏՄԱԴ</h2>
        </Box>
        <Typography
          gap={1}
          display="flex"
          fontSize="1.25rem"
          alignItems="center"
          variant="subtitle2"
          fontWeight="700"
        >
          <IconBaselinePhone />
          +374 94 940 604
        </Typography>
      </Box>
      <Box component="main" height="100%">
        <Grid container height="100%">
          <Grid
            item
            lg={6}
            p={2}
            md={6}
            display="flex"
            justifyContent="center"
            gap={5}
            flexDirection="column"
            alignItems="center"
          >
            <img src={IconLg} />
            <Typography
              maxWidth={600}
              textAlign="center"
              color="#333333"
              style={{ textWrap: "wrap" }}
              variant="body1"
            >
              "ԱՐՏՄԱԴ" ՍՊԸ-ն քաղաքաշինության բնագավառում իրականացնում է
              օբյեկտների հետախուզման և հետազննման ծառայություններ։
            </Typography>
          </Grid>
          <Grid item className="construction" lg={6} md={6} sm={0} />
        </Grid>
      </Box>
      <Box
        py={2}
        px={{
          lg: 24,
          md: 12,
          sm: 10,
        }}
        display="flex"
        alignItems="center"
        gap={10}
        justifyContent="space-between"
        style={{
          background: "#9CAAC0",
        }}
      >
        <IconSm />

        <Box display="flex" flexDirection="column">
          <Typography
            variant="body1"
            display="flex"
            fontSize="1.125rem"
            component="a"
            href="mailto:artmad.llc@mail.ru"
            alignItems="self-end"
            gap={1}
          >
            <IconMailSolid />
            artmad.llc@mail.ru
          </Typography>
          <Typography
            gap={1}
            display="flex"
            alignItems="self-end"
            fontSize="1.125rem"
            variant="subtitle2"
            fontWeight="700"
          >
            <IconLocationFilled /> ՀՀ Տավուշի մարզ, գ․Այգեհովիտ, փ․ 2, տուն 35
          </Typography>
        </Box>
        <Box>
          <p style={{ height: 28 }}>&nbsp;</p>
          <Typography
            gap={1}
            display="flex"
            alignItems="self-end"
            fontSize="1.125rem"
            variant="subtitle2"
            fontWeight="700"
          >
            Կայքը գտնվում է վերազինման փուլում
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>ԱՐՏՄԱԴ</title>;
