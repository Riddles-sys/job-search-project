import styles from '../styles/Home.module.css'
import jobsStyle from '../styles/Jobs.module.css'
import Link from 'next/link'
import algoliasearch from 'algoliasearch/lite'
import Image from 'next/image'
import imageLoader from '../imageLoader'
import logo from '../images/Paradigmo_Logo.png'

import {
  RefinementList,
  SearchBox,
  Hits,
  Configure,
  Highlight,
  Pagination,
  InstantSearch,
} from 'react-instantsearch-dom'

const searchClient = algoliasearch(
  'RY8KA2GJPX',
  '13e751a21f2ae69d7ccb7b590a0a9b3a'
)

export default function JobsPage(props: any) {
  return (
    <section>
      <InstantSearch
        {...props}
        appId="RY8KA2GJPX"
        apikey="13e751a21f2ae69d7ccb7b590a0a9b3a"
        indexName="development_jobs_index"
        searchClient={searchClient}
      >
        <Configure hitsPerPage={8} />
        <header>
          <Link href="/">
            <Image
              unoptimized
              className={styles.logo}
              alt="Paradigmo Logo"
              src={logo}
              width="60"
              height="60"
            />
          </Link>
        </header>
        <main>
          <div className={jobsStyle.jobs__title}>
            <h1>Who will you be?</h1>
            <div className={jobsStyle.jobs__search}>
              <SearchBox />
            </div>
          </div>
          <div className={jobsStyle.results}>
            <Hits hitComponent={HitComponent} />
          </div>
        </main>
        <footer>
          <Pagination className={jobsStyle.pagination__list} />
        </footer>
      </InstantSearch>
    </section>
  )
}

const HitComponent = ({ hit }: any) => (
  <div className={styles.grid}>
    <div className={styles.card}>
      <div className={jobsStyle.card__image}>
        <Image
          loader={imageLoader}
          unoptimized
          className="hit-picture"
          alt={hit.company_name}
          src={hit.company_logo}
          width="120"
          height="120"
        ></Image>
        <h4>Status: {hit.status}</h4>
        <button>Apply</button>
      </div>
      <div className={jobsStyle.results}>
        <div>
          <Highlight attribute="results" hit={hit} />
          <h3>{hit.company_name}</h3>
          <h4>Description: {hit.description}</h4>
          <h5>Pay: £{hit.pay}</h5>
          <h5>Min Pay: £{hit.pay_min} </h5>
          <h5>Max Pay: £{hit.pay_max} </h5>
        </div>
      </div>
    </div>
  </div>
)
