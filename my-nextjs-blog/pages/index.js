import Link from 'next/link';
import post1 from '../data/first-post';
import post2 from '../data/second-post';
import post3 from '../data/third-post';

const posts = [post1, post2, post3];

export default function Home() {
    return (
        <div className="container">
            <h1>My Blog</h1>
            <ul className="post-list">
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`} passHref>
                            <button>{post.title}</button>
                        </Link>
                        <p><strong>{post.author}</strong> - {post.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
