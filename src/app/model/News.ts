export type Root = Root2[]

export interface Root2 {
  id: string
  assetName: string
  type: string
  locale: string
  schema_version: string
  title: string
  teaserTitle: string
  mobileHeadline: string
  author: string[]
  author_bio_link: string | undefined[]
  pcollid: string
  url: string
  description: string
  createdate: string
  publishdate: string
  lastmodifieddate: string
  adsmetrics: Adsmetrics
  providerid: string
  providername: string
  distro: boolean
  premium: boolean
  seometa: Seometa
  interests: Interests
  tags: Tags
  variants: Variants
  body: string
  flags: Flags
  wxnodes: Wxnode[]
  source_guid: string
  source_name: string
  story_brief: string[]
  page_template: string
}

export interface Adsmetrics {
  adconfigid: string
  adzone: string
  pagecode?: string
}

export interface Seometa {
  title: string
  keywords: string
  description: string
  "og:image": string
  "og:description": string
  canonical: any
}

export interface Interests {
  category: string
  backgroundColorName: string
}

export interface Tags {
  geo: string[]
  keyword: string[]
  iab: Iab
  storm: any[]
  entitlements: string[]
}

export interface Iab {
  v1: string[]
  v2: string[]
  v3: string[]
}

export interface Variants {
  "0": string
  "1": string
  "2": string
  "3": string
  "4": string
  "5": string
  "6": string
  "7": string
  "8": string
  "9": string
  "10": string
  "11": string
  "12": string
  "13": string
  "14": string
  "15": string
  "16": string
  "17": string
  "18": string
  "19": string
  "20": string
  "21": string
  "200": string
  "400": string
}

export interface Flags {
  Facebook: boolean
  Intranet: boolean
  "TV App": boolean
  Twitter: boolean
  YouTube: boolean
  "Google+": boolean
  "Big Web": boolean
  "Little Web": boolean
  "Mobile Apps": boolean
  orig_source: string
}

export interface Wxnode {
  id: string
  type: string
  schema_version: string
  options?: string[]
  assetid?: string
  clipid?: string
  collection?: string
  collection_name?: string
  playlist_type?: string
  sizecode?: string
  align: any
  map?: Map
  links?: any[]
  title?: string
  description?: string
  help_text?: string
  twitter_widget?: TwitterWidget
  caption?: string
  credit?: string
  linkurl?: string
  synopsis?: string
  refreshadbeacon?: number
  refreshpvbeacon?: number
  slideshow?: string
  adposition?: string
}

export interface Map {
  sizecode: string
  imageurl: string
}

export interface TwitterWidget {
  embed_text: string
  type: string
  embed_options: EmbedOptions
}

export interface EmbedOptions {
  handle: string
  tweet_id?: string
}
