// export async function GET(request) {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await res.json();
//     console.log(data);    

//   return Response.json({ message: "Hello, Next.js!", data_from_api: data });
// }.

// ! GET request handler with query parameters
// export async function GET(request) {
//     console.log(request)
//     const url = new URL(request.url);
//     const {searchParams} = url;
//     console.log(searchParams);
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos?q=delectus&_limit=10");
//     const data = await res.json();
//     // console.log(data);
//     return Response.json({ data:data});
// }


export async function GET(request) {
    const url = new URL(request.url);
    const {searchParams} = url;
    const apiUrl =new URL("https://jsonplaceholder.typicode.com/todos");
    searchParams.forEach((value, key) => {
        apiUrl.searchParams.append(key, value);
    });
    console.log(apiUrl.toString());
    const res = await fetch(apiUrl.toString());
    const data = await res.json();
    return Response.json({ data:data});
}