import Filters from "@/components/Filters";
import ResourcesCard from "@/components/ResourcesCard";
import SearchForm from "@/components/SearchForm";
import { getResources } from "@/sanity/actions";
import { resourceUsage } from "process";

const Page = async () => {
  const resources = await getResources({
    query: "",
    category: "",
    page: "1",
  });
  console.log(resources);

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col  ">
      <section className="nav-padding w-full ">
        {/* nav-padding: pt-[98px] that explains why the box is not in the middle*/}
        <div className="flex-center relative min-h-[274px] w-full rounded-xl bg-banner ">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white ">
            Javascript Mastery Resources
          </h1>
        </div>
        <SearchForm />
      </section>
      <Filters />
      <section className="flex-center mt-6 w-full flex-col sm:mt-20">
        Header
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          {resources?.length > 0 ? (
            resources.map((resource: any) => (
              <ResourcesCard
                key={resource._id}
                title={resource.title}
                id={resource._id}
                image={resource.image}
                downloadNumber={resource.views}
                slug={resource._id}
              />
            ))
          ) : (
            <p className="body-regular text-white-400">No resources found</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Page;
