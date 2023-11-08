import TeamMember from "./TeamMember";

const TeamMembers = () => {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="container px-6 py-8 mx-auto">
        <h2 className="text-2xl font-semibold text-center bg-gray-800 bg-opacity-20 text-gray-800 capitalize lg:text-3xl dark:text-white">
          Our Team
        </h2>

        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  bg-gray-400 bg-opacity-20 p-3">
          <TeamMember />
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
