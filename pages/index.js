import GithubSvg from '@svgs/GithubSvg';
import GoogleSvg from '@svgs/GoogleSvg';
import { GITHUB_URL } from '@constants/urls.js';

export default function Home() {
  console.log(GITHUB_URL);
  return (
    <main className="self-center flex justify-center items-center h-screen w-screen">
      <article>
        <h1 className="uppercase text-6xl nunito">
          Suraj Yadav
        </h1>
        <nav>
          <div>
          </div>
          <ul>
            <li>
              <GithubSvg />
            </li>
            <li>
              <GoogleSvg />
            </li>
            <li>
            </li>
          </ul>
        </nav>
      </article>
    </main>
  );
}
