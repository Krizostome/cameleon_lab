import ProjectDetailPage from '../../src/pages/ProjectDetailPage'
import AppLayout from '../../Layouts/AppLayout'

PortfolioShow.layout = (page: JSX.Element) => <AppLayout>{page}</AppLayout>

export default function PortfolioShow() {
  return <ProjectDetailPage />
}
