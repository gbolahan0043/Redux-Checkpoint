// import ArticleList from "@/components/ArticleList";

// async function getData() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
//   const articles = await res.json();
//   return articles;
// }

// export default async function Home() {
//   const articles = await getData();
  
//   //console.log(articles);

//   return (
//     <div>
//       <h1>Welcome to Next.js</h1>
//       <ul>
//         <ArticleList articles={articles}/>
//       </ul>
//     </div>
//   );
// }

"use client"
import { useEffect, useState } from 'react';
import ArticleList from "@/components/ArticleList"

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(articles)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
        if (!res.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await res.json();
        setArticles(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Welcome to Next.js</h1>
      <ul>
        <ArticleList articles={articles} />
      </ul>
    </div>
  );
}
