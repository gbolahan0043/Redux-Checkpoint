import Link from "next/link";

async function getArticle(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const article = await res.json();
    return article;
}

export default async function SingleArticle({ params }) {
    const { id } = params;
    const article = await getArticle(id);

    return (
        <ul>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br></br>
            <Link href='/'>Go Back</Link>
        </ul>
    );
}

export async function generateStaticParams() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles = await res.json();

    return articles.map((article) => ({
        id: article.id.toString(),
    }));
}