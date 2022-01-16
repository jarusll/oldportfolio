import Link from 'next/link';
import { GITHUB_URL, GOOGLE_URL, LINKEDIN_URL } from "@constants/urls.js";

export default function Home() {
  const urlIconPairs = [
    {
      url: GITHUB_URL,
      icon: 'fa-github'
    },
    {
      url: GOOGLE_URL,
      icon: 'fa-google'
    },
    {
      url: LINKEDIN_URL,
      icon: 'fa-linkedin'
    }
  ]
  return (
    <main className="self-center flex justify-center items-center h-screen w-screen">
      <article className="grid-cols-1">
        <h1 className="uppercase text-5xl nunito text-center">
          Suraj Yadav
        </h1>
        <nav>
          <ul className="flex row-auto justify-center text-center py-2">
            {
              urlIconPairs.map(({ icon, url }) => {
              return (
                <Link href={url} passHref>
                  <a target="_blank">
                    <li className="cursor-pointer hover:bg-gray-100">
                      <i className={`fab fa-3x p-3 rounded ${icon}`}></i>
                    </li>
                  </a>
                </Link>
              )
            })
            }
          </ul>
        </nav>
      </article>
    </main>
  );
}
