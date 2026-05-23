export async function GET(request) {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    console.log(data);    

  return Response.json({ message: "Hello, Next.js!", data_from_api: data });
}