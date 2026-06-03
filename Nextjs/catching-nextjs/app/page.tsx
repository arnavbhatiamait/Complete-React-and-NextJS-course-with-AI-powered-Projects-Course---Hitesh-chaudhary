import { getUserList, updateTheList } from "@/actions";
import {Suspense} from "react";
import UserList from "./component/userlist";
type User = {
  id: string;
  name: string;
  avatar?: string;
  createdAt?: string;
};

export default async function Home() {
  // const res= await getUserList()
  // &with "users", you can later invalidate all cached data associated with that tag when necessary, ensuring that users always see the most up-to-date information without having to wait for the cache to expire naturally.
    // ! cache: "force-cache" will cache the response and serve it for subsequent requests without revalidating until the cache expires. This is useful for data that doesn't change frequently and can improve performance by reducing the number of network requests.
    // ^ next: { revalidate: 50 } will revalidate the cached data every 50 seconds. This means that after 50 seconds, the next request will trigger a new fetch to update the cache with fresh data. This is useful for data that changes periodically and ensures that users see up-to-date information without having to wait for the cache to expire completely.
    // ! If you want to ensure that the data is always fresh and not cached, you can use cache: "no-store" instead, which will bypass the cache and fetch new data on every request.
    // ~ In summary, using cache: "force-cache" with next: { revalidate: 50 } allows you to balance performance and freshness by caching data for a certain period while still ensuring that it gets updated regularly.
  

  // if (!res.ok) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <p className="text-red-600">Failed to load users: {res.status}</p>
  //     </div>
  //   );
  // }

  // const users: User[] = res;

  // return (
  //   <main className="min-h-screen bg-zinc-50 dark:bg-black p-6">
  //     <div className="max-w-5xl mx-auto">
  //       <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Users</h1>

  //       <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  //         {users.map((u,index:number) => (
  //           <li key={u.id} className="flex items-center gap-4 p-4 bg-white rounded shadow">
  //             <h2 className="text-black">User {index + 1}</h2>
  //             {u.avatar ? (
  //               <img src={u.avatar} alt={u.name} className="w-16 h-16 rounded-full object-cover" />
  //             ) : (
  //               <div className="w-16 h-16 bg-gray-200 rounded-full" />
  //             )}

  //             <div>
  //               <div className="font-semibold text-gray-900 dark:text-white">{u.name}</div>
  //               {u.createdAt && (
  //                 <div className="text-xs text-gray-500">{new Date(u.createdAt).toLocaleString()}</div>
  //               )}
  //             </div>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //     <form action={updateTheList} className="mt-6">
  //       <button
  //         type="submit"
  //         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  //       >
  //         Update User List
  //       </button>
  //     </form>
  //   </main>
  // );
return (
<>
<h1>User Directory</h1>
<Suspense fallback={<p>Loading users...</p>}>
  <UserList />
</Suspense>
</>
)
}