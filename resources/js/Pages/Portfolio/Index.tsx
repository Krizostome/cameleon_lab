import PortfolioPage from '../../src/pages/PortfolioPage'
import AppLayout from '../../Layouts/AppLayout'

Portfolio.layout = (page: JSX.Element) => <AppLayout>{page}</AppLayout>

export default function Portfolio() {
  return <PortfolioPage />
}
