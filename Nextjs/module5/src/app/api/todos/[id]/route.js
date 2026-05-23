
// ! PUT request handler
export async function PUT(request,{params}) {
    const data = await request.json();
    const updatedTodo = {id: params.id, ...data};
    console.log(updatedTodo);
    return Response.json(
        { success: true, message: "Todo updated successfully!", todo: updatedTodo },
        { status: 200 }
    );

}
// ! PATCH request handler
export async function PATCH(request,{params}) {
    const data = await request.json();
    const updatedTodo = {id: params.id, ...data};
    console.log(updatedTodo);
    return Response.json(
        { success: true, message: "Todo updated successfully!", todo: updatedTodo },
        { status: 200 }
    );

}

// ! DELETE request handler
export async function DELETE(request,{params}) {
    console.log(`Todo with id ${params.id} deleted`);
    return Response.json(
        { success: true, message: `Todo with id ${params.id} deleted successfully!` },
        { status: 200 }
    );
}
