import { Flex } from "@chakra-ui/react";
import Head from "next/head";

import { Banner } from "../components/Banner";
import { CallToAction } from "../components/CallToAction";
import { Carousel } from "../components/Carousel";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex direction="column">
      <Head>
        <title>Home | World Trip</title>
      </Head>

      <Header />
      <Banner />
      <TravelTypes />
      <Divider />
      <CallToAction />
      <Carousel />
    </Flex>
  )
}
