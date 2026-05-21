import BlogPage from '../../src/pages/BlogPage'
import AppLayout from '../../Layouts/AppLayout'

Blog.layout = (page: JSX.Element) => <AppLayout>{page}</AppLayout>

export default function Blog() {
  return <BlogPage />
}
