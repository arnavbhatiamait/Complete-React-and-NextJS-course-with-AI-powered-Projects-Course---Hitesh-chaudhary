export async function POST(request) {
    // ! parse the request body
    const body = await request.json();
    console.log(body);
    const { title, completed } = body;
    // ! create a new todo object
    const newTodo = {
        id: Date.now(),
        title,
        completed
    };

    return Response.json(
        { success: true, message: "Todo created successfully!", todo: newTodo },
        { status: 201 }
    );
}