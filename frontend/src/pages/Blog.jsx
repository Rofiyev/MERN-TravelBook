import Layout from "../layout";
import { useState, useEffect } from "react";
import { getAllTravelBooks } from "../api";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const {
        data: { travels },
        success,
      } = await getAllTravelBooks();
      if (success) {
        setBlogs(travels);
      }
    })();
  }, []);

  console.log(blogs);

  return (
    <Layout>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              All Travel Books
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {blogs?.map((item, i) => (
              <article
                key={i}
                className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="bg-blue-500 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                    <svg
                      className="mr-1 w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                    </svg>
                    Tutorial
                  </span>
                  <span className="text-sm">14 days ago</span>
                </div>
                <img
                  className="rounded-t-lg mb-2 h-80 w-full object-cover"
                  src={item.image}
                  alt={item.title}
                />
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400 line-clamp-4">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-7 h-7 rounded-full object-cover"
                      src="https://rof1yev-blog.vercel.app/_next/static/media/person.ce26a74e.jpg"
                      alt="Jese Leos avatar"
                    />
                    <span className="font-medium dark:text-white">
                      Rofiyev Dilshod
                    </span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center font-medium text-blue-600"
                  >
                    Read more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
