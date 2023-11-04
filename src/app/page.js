import Hero from "./components/Hero";
import BlogsList from "./components/BlogsList";
import Subcribe from "./components/Subcribe";
import FeatureBlogs from "./components/FeatureBlogs";

import { PrismaClient } from "@prisma/client";
const getData = async () => {
  const prisma = new PrismaClient();
  const result = await prisma.blogs.findMany({
    orderBy: { id: "desc" },
    take: 2,
  });
  return result;
};

export default async function Home() {
  const blogs = await getData();
  return (
    <>
      <Hero />
      <FeatureBlogs />
      <BlogsList title={"recent posts"} blogs={blogs} />
      <Subcribe />
    </>
  );
}
