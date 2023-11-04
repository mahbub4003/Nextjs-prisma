import Image from "next/image";
import Hero from "./components/Hero";
import FeatureBlog from "./components/FeatureBlog";
import BlogsList from "./components/BlogsList";
import Subcribe from "./components/Subcribe";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureBlog />
      <BlogsList />
      <Subcribe />
    </>
  );
}
