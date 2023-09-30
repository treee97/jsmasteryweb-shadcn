import Filters from "@/components/Filters";
import SearchForm from "@/components/SearchForm";
import { getResources } from "@/sanity/actions";

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
    </main>
  );
};

export default Page;
