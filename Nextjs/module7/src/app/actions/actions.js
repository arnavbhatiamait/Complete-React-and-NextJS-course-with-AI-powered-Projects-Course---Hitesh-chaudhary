"use server"
export async function createToDo(formData){
    const title = formData.get("title")
    console.log(title)
}
