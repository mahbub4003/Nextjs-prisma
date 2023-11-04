const Blog = ({ blog }) => {
  console.log("blog", blog.createdAt);
  return (
    <>
      <div>
        <img
          className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
          src={blog.img}
          alt=""
        />

        <div className="mt-8">
          <span className="text-blue-500 uppercase">category</span>

          <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
            {blog.title}
          </h1>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            {blog.short_des}
          </p>

          <div className="flex items-center justify-between mt-4">
            <div>
              <a
                href="#"
                className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
              >
                {blog.bloger_name}
              </a>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {blog.createdAt.toString()}
              </p>
            </div>

            <a
              href="#"
              className="inline-block text-blue-500 underline hover:text-blue-400"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
