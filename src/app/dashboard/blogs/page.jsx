import BlogsList from "@/app/components/BlogsList";
import { PrismaClient } from "@prisma/client";
const getData = async () => {
  const prisma = new PrismaClient();
  const result = await prisma.blogs.findMany();
  return result;
};

const Blogs = async () => {
  const blogs = await getData();
  console.log(blogs);
  return (
    <div>
      <BlogsList blogs={blogs} />
    </div>
  );
};

export default Blogs;
