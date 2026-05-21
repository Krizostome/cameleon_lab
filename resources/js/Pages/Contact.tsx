import ContactPage from '../src/pages/ContactPage'
import AppLayout from '../Layouts/AppLayout'

Contact.layout = (page: JSX.Element) => <AppLayout>{page}</AppLayout>

export default function Contact() {
  return <ContactPage />
}
