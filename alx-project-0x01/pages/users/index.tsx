import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
    users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="p-4 flex-grow bg-gray-50">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-semibold">Our Users</h1>
                        <button className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition">
                            Add User
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {users?.map((user: UserProps) => (
                            <UserCard 
                                key={user.id}
                                id={user.id}
                                name={user.name}
                                username={user.username}
                                email={user.email}
                                address={user.address}
                                phone={user.phone}
                                website={user.website}
                                company={user.company}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    
    return {
        props: {
            users
        }
    };
}

export default Users;
