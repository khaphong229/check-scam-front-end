import React from 'react'
import arrowRight from '../../../../assets/images/arrow-right.svg'
import { Link } from 'react-router-dom'

interface BreadCrumbLink {
  text: string
  href: string
  active?: boolean
}

interface BreadCrumbProps {
  links: BreadCrumbLink[]
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ links }) => {
  return (
    <section className='breadcrumb'>
      {links.map((link, index) => (
        <React.Fragment key={link.href}>
          <Link to={link.href} className={`breadcrumb__link ${link.active ? 'active' : ''}`}>
            {' '}
            {link.text}{' '}
          </Link>
          {index < links.length - 1 && <img src={arrowRight} alt='breadcrumb-icon' />}
        </React.Fragment>
      ))}
    </section>
  )
}

export default BreadCrumb
