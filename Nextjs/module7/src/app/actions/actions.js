"use server"
export async function createToDo(formData) {
    const title = formData.get("title")
    console.log(title)
}

export async function updateToDo(title, desc, isCompleted) {
    const newData = {
        title,
        desc,
        isCompleted
    }
    console.log(newData)
    return {
        success: true,
        data: newData
    }
}