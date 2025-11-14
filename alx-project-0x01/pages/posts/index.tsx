import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
    posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
    console.log(posts);
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="p-4 flex-grow bg-gray-50">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-semibold">Post Content</h1>
                        <button className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition">
                            Add Post
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {posts?.map((post: PostProps) => (
                            <PostCard 
                                key={post.id}
                                title={post.title} 
                                body={post.body} 
                                userId={post.userId} 
                                id={post.id} 
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export async function getStaticProps() {
    const englishPosts = [
        {
            userId: 1,
            id: 1,
            title: "Understanding React Components",
            body: "React components are the building blocks of React applications. They allow you to create reusable UI elements that manage their own state and properties."
        },
        {
            userId: 1,
            id: 2,
            title: "Next.js Framework Overview",
            body: "Next.js provides a complete solution for production-ready React applications. It includes features like server-side rendering, static generation, and API routes out of the box."
        },
        {
            userId: 1,
            id: 3,
            title: "TypeScript Benefits",
            body: "TypeScript adds optional static typing to JavaScript, helping developers catch errors during development and providing better tooling support in modern code editors."
        },
        {
            userId: 1,
            id: 4,
            title: "Tailwind CSS Utility Classes",
            body: "Tailwind CSS is a utility-first CSS framework that enables rapid UI development. Instead of writing custom CSS, you use predefined classes to style your elements."
        },
        {
            userId: 1,
            id: 5,
            title: "Modern Web Development",
            body: "Contemporary web development emphasizes performance, accessibility, and user experience. Technologies like React, Vue, and Angular help build interactive user interfaces."
        },
        {
            userId: 1,
            id: 6,
            title: "API Integration Techniques",
            body: "Integrating with RESTful APIs involves making HTTP requests, handling responses, and managing state. Libraries like Axios and Fetch API simplify these operations."
        }
    ];
    
    return {
        props: {
            posts: englishPosts
        }
    };
}

export default Posts;
