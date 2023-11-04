import ServicesCom from "@/app/components/ServicesCom";
import { PrismaClient } from "@prisma/client";

const getData = async () => {
  const prisma = new PrismaClient();
  const result = await prisma.services.findMany();
  return result;
};

const Services = async () => {
  const services = await getData();
  return (
    <div>
      <ServicesCom services={services} />
    </div>
  );
};

export default Services;
