import Layout from "../layout";
import img_1 from "../assets/img-1.png";
import img_2 from "../assets/img-2.jpg";

export default function About() {
  return (
    <Layout>
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Travel Book
            </h2>
            <p class="mb-4">
              The highest priority of the Bureau of Consular Affairs is to
              protect the lives and serve the interests of U.S. citizens
              abroad.   Across the globe, we serve our fellow citizens during
              some of their most important moments – births, adoptions, medical
              emergencies, deaths, arrests, and disasters.
            </p>
            <p>
              The origin of the word "travel" is most likely lost to history.
              The term "travel" may originate from the Old French word travail,
              which means 'work'. According to the Merriam-Webster dictionary,
              the first known use of the word travel was in the 14th century.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="w-full rounded-lg h-full object-cover"
              src={img_1}
              alt="office content 1"
            />
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg h-full object-cover bg-blend-overlay"
              src={img_2}
              alt="office content 2"
            />
          </div>
        </div>
        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">30+</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">
                Country
              </dd>
            </div>
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">60+</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">City</dd>
            </div>
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">300</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">Posts</dd>
            </div>
          </dl>
        </div>
      </section>
    </Layout>
  );
}
