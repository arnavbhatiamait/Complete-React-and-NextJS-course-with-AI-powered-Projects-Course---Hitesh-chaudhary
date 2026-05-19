function fetchPostData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Post data fetched successfully");
        },2000);
    });
}


function fetchCommentData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Comment data fetched successfully");
        },3000);
    });
}
// async function getBlogData(){
//     try {
//         console.log("Fetching blog data...");
//         const postData = await fetchPostData();
//         console.log("Post data fetched:", postData);
//         const commentData = await fetchCommentData();
//         console.log("Comment data fetched:", commentData);
//         return { postData, commentData };
//     } catch (error) {
//         console.error("Error fetching blog data:", error);
//     }   
// }

// ! Using Promise.all to fetch post and comment data concurrently
async function getBlogData() {
    try {
        console.log("Fetching blog data...");
        const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()]);
        console.log("Post data fetched:", postData);
        console.log("Comment data fetched:", commentData);
        return { postData, commentData };
    }
    catch (error) {
        console.error("Error fetching blog data:", error);
    }
}


let blogData = await getBlogData();
console.log(blogData);