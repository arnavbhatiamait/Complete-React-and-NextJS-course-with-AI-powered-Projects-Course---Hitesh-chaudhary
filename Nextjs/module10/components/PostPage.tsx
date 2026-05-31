import { createPost, getAllPosts } from '@/actions/post-actions'
import Post from './Post'

const PostPage = async () => {
  const posts = await getAllPosts()

  return (
    <>
      <div>
        <h1> Create Post</h1>
        <form action={createPost}>
          <input type="text" name="title" placeholder="Enter Title" />
          <textarea name="content" placeholder="Enter Content"></textarea>
          <button type="submit">Create Post</button>
        </form>
      </div>

      <div>
        <h1> ALL Posts</h1>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}

export default PostPage
