import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import post1 from '../../data/first-post';
import post2 from '../../data/second-post';
import post3 from '../../data/third-post';

const posts = {
  'first-post': post1,
  'second-post': post2,
  'third-post': post3,
};

const Post = () => {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (id) {
            // Set the post based on the id
            setPost(posts[id] || null);
        }
    }, [id]);

    if (!id) return <div className="container">Loading...</div>;
    if (!post) return <div className="container">Post not found</div>;

    return (
        <div className="container post-content">
            <h1>{post.title}</h1>
            <p><strong>{post.author}</strong> - {post.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <a href="/" className="back-link">Back to Home</a>
        </div>
    );
};

export default Post;
