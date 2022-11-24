export interface getJobResults {
  info: Info
  results: Jobs
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: string
}

export interface Jobs {
  id: number
  company_id: number
  company_name: string
  company_logo: string
  industry: string
  industry_normalised: string
  status: string
  employment_type: string
  location_type: string
  pay_type: string
  pay_currency: string
  pay_mask: string
  pay: string
  pay_min: string
  pay_max: string
  description: string
  title: string
  title_normalised: string
  category: string
  category_normalised: string
  skills: string
  skills_normalised: string
  address_1: string
  address_2: string
  town: string
  city: string
  postcode: string
  country: string
  coordinates: number
  apply_url: string
  flow: string
  vacancies: string
  source: string
  internal_id: number
  external_id: number
  external_ref: string
  expires_at: number
  published_at: number
  expired_at: number
  deleted_at: number
  created_at: number
  updated_at: number
  company: string
  _geoloc: string
  _tags: string
  objectID: number
  _highlightResult: string
  __position: number
}

export interface Location {
  name: string
  url: string
}

// export enum Status {
//   Alive = 'Alive',
//   Dead = 'Dead',
//   Unknown = 'unknown',
// }
