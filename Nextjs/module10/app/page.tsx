import { createUser, getUsers } from "@/actions/actions";
import PostPage from "@/components/PostPage";
export default async function Home() {

  const data=await getUsers();
  console.log(data);
  return (
   <div className="">
    <h1>
      Create User
    </h1>
    <form action={createUser}>
      <input type="text" name="name" placeholder="Enter Name" />
      <input type="email" name="email" placeholder="Enter Email" />
      <button type="submit">Create User</button>
    </form>
    <PostPage/>
   </div>
  );
}
