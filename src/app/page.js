import Hero from "./components/Hero";
import BlogsList from "./components/BlogsList";
import Subcribe from "./components/Subcribe";
import FeatureBlogs from "./components/FeatureBlogs";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureBlogs />
      <BlogsList />
      <Subcribe />
    </>
  );
}
