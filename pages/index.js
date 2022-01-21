import Link from 'next/link';
import { GITHUB_URL, GOOGLE_URL, LINKEDIN_URL } from "@constants/urls.js";
import { useTheme } from 'next-themes';

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
  const {theme, setTheme} = useTheme()
  return (
    <main className="self-center flex justify-center items-center h-screen w-screen">
      <button className="absolute top-0 right-0 m-1"
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
        <i class="fas fa-adjust p-2 hover:bg-gray-300 dark:hover:bg-gray-800 rounded-full transition-colors"></i>
      </button>
      <article className="grid-cols-1">
        <h1 className="uppercase text-5xl nunito text-center">
          Suraj Yadav
        </h1>
        <nav>
          <ul className="flex row-auto justify-center text-center py-2">
            {
              urlIconPairs.map(({ icon, url }) => {
              return (
                <Link href={url} passHref key={url}>
                  <a target="_blank">
                    <li className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 p-4 rounded-full">
                      <i className={`fab fa-3x ${icon}`}></i>
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
