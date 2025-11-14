import Header from "@/components/layout/Header";

const UsersPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Users Page</h1>
                <p>This is the users index page.</p>
            </main>
        </div>
    );
};

export default UsersPage;
