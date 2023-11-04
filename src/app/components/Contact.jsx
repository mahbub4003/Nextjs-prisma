import { PrismaClient } from "@prisma/client";
import parse from "html-react-parser";
const getData = async () => {
  const prisma = new PrismaClient();
  const result = await prisma.contact.findMany();
  return result;
};

const Contactcom = async () => {
  const contact = await getData();
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div>
            <p className="font-medium text-blue-500 dark:text-blue-400">
              Contact us
            </p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
              Get in touch
            </h1>

            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Our friendly team is always here to chat.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            {parse(contact[0].email)}
            {parse(contact[0].office)}
            {parse(contact[0].phone)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactcom;
