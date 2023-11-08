import BlogsList from "@/app/components/BlogsList";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const getData = async () => {
  const prisma = new PrismaClient();
  const data = await prisma.blogs.findMany();
  return data;
};

const Blogs = async () => {
  const blogs = await getData();
  return (
    <div>
      <BlogsList title={"Our blogs"} blogs={blogs} />
    </div>
  );
};

export default Blogs;
