import Breadcrumb from '@/components/Common/Breadcrumb'
import Contact from '@/components/Contact/Contact'
import CallToAction from '@/components/Common/Cta'

export const metadata = {
  title: 'Contact Us | UDB Expert Cloud Solutions',
  description:
    'Unlock the Power of the Cloud: Your One-Stop Solution for Comprehensive Cloud Computing Services',
}

const ContactLayout = () => {
  return (
    <>
      <Breadcrumb title="Send Us A Message" text="Contact" />
      <Contact />
      <div className="rainbow-cta-area rainbow-section-gap ">
        <div className="container">
          <CallToAction />
        </div>
      </div>
    </>
  )
}

export default ContactLayout
