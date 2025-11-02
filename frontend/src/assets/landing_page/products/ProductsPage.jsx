import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Hero from "./Hero";
import Universe from "./Universe";

const ProductsPage = () => {
  let productNames = [
    "Kite",
    "Console",
    "Coin",
    "Kite Connect API",
    "Varsity Mobile",
  ];
  let imagePaths = [
    "/images/kite.png",
    "images/console.png",
    "images/coin.png",
    "images/kiteconnect.png",
    "images/varsity.png",
  ];
  let productBodys = [
    "Our ultra-fast flagship trading platform with streaming market data, advanced charts, and elegant UI and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
    "The Central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
    "Buy direct mutual funds online, commission free, delivered directly to your demat account. Enjoy the investment experience on your Androis and iOS devices.",
    "Build powerful trading platforms and experience with our super simple HTTPS/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.",
    "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-sized cards to help you learn and grow on the go",
  ];
  let demoLinks = [
    "https://kite-demo.zerodha.com/dashboard",
    "https://zerodha.com/products/console/",
    "https://coin.zerodha.com/mf/invest",
    "https://zerodha.com/products/api/",
    null,
  ];
  let learnMoreLinks = [
    "https://kite.zerodha.com/",
    null,
    "https://coin.zerodha.com/",
    null,
    "https://zerodha.com/varsity/",
  ];
  let playstoreLinks = [
    "https://play.google.com/store/apps/details?id=com.zerodha.kite3&hl=en_IN",
    null,
    "https://play.google.com/store/apps/details?id=com.zerodha.coin&hl=en_IN",
    null,
    "https://play.google.com/store/apps/details?id=com.zerodha.varsity",
  ];
  let appstoreLinks = [
    "https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802",
    null,
    "https://apps.apple.com/in/app/coin-by-zerodha-mutual-funds/id1392892554",
    null,
    "https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753",
  ];

  return (
    <>
      <Hero />

      <LeftSection
        imagePath={imagePaths[0]}
        productName={productNames[0]}
        productBody={productBodys[0]}
        demoLink={demoLinks[0]}
        learnMoreLink={learnMoreLinks[0]}
        playstoreLink={playstoreLinks[0]}
        appstoreLink={appstoreLinks[0]}
      />

      <RightSection
        imagePath={imagePaths[1]}
        productName={productNames[1]}
        productBody={productBodys[1]}
        demoLink={demoLinks[1]}
        learnMoreLink={learnMoreLinks[1]}
        playstoreLink={playstoreLinks[1]}
        appstoreLink={appstoreLinks[1]}
      />

      <LeftSection
        imagePath={imagePaths[2]}
        productName={productNames[2]}
        productBody={productBodys[2]}
        demoLink={demoLinks[2]}
        learnMoreLink={learnMoreLinks[2]}
        playstoreLink={playstoreLinks[2]}
        appstoreLink={appstoreLinks[2]}
      />

<RightSection
        imagePath={imagePaths[3]}
        productName={productNames[3]}
        productBody={productBodys[3]}
        demoLink={demoLinks[3]}
        learnMoreLink={learnMoreLinks[3]}
        playstoreLink={playstoreLinks[3]}
        appstoreLink={appstoreLinks[3]}
      />

      <LeftSection
        imagePath={imagePaths[4]}
        productName={productNames[4]}
        productBody={productBodys[4]}
        demoLink={demoLinks[4]}
        learnMoreLink={learnMoreLinks[4]}
        playstoreLink={playstoreLinks[4]}
        appstoreLink={appstoreLinks[4]}
      />

      <Universe/>
    </>
  );
};

export default ProductsPage;
