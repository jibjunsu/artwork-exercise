export interface ArtWorkResponse {
  pagination: Pagination;
  data: Artwork[];
  info: Info;
  config: Config;
}

export interface ArtWorkRequestOption {
  ids?: string;
  limit?: number;
  page?: number;
  fields?: string;
  include?: string;
}

export interface Pagination {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  next_url: string;
}

export interface Thumbnail {
  lqip: string;
  width: number;
  height: number;
  alt_text: string;
}

export interface Color {
  h: number;
  l: number;
  s: number;
  percentage: number;
  population: number;
}

export interface Contexts {
  groupings: string[];
}

export interface SuggestAutocompleteAll {
  input: string[];
  contexts: Contexts;
  weight?: number;
}

export interface Artwork {
  id: number;
  api_model: string;
  api_link: string;
  is_boosted: boolean;
  title: string;
  alt_titles?: any;
  thumbnail: Thumbnail;
  main_reference_number: string;
  has_not_been_viewed_much: boolean;
  boost_rank?: any;
  date_start: number;
  date_end: number;
  date_display: string;
  date_qualifier_title: string;
  date_qualifier_id?: number;
  artist_display: string;
  place_of_origin: string;
  dimensions: string;
  medium_display: string;
  inscriptions?: any;
  credit_line: string;
  publication_history?: any;
  exhibition_history?: any;
  provenance_text?: any;
  publishing_verification_level: string;
  internal_department_id: number;
  fiscal_year?: number;
  fiscal_year_deaccession?: any;
  is_public_domain: boolean;
  is_zoomable: boolean;
  max_zoom_window_size: number;
  copyright_notice?: any;
  has_multimedia_resources: boolean;
  has_educational_resources: boolean;
  colorfulness: number;
  color: Color;
  latitude?: any;
  longitude?: any;
  latlon?: any;
  is_on_view: boolean;
  on_loan_display?: any;
  gallery_title?: any;
  gallery_id?: any;
  artwork_type_title?: any;
  artwork_type_id?: any;
  department_title: string;
  department_id: string;
  artist_id: number;
  artist_title: string;
  alt_artist_ids: any[];
  artist_ids: number[];
  artist_titles: string[];
  category_ids: string[];
  category_titles: string[];
  artwork_catalogue_ids: any[];
  term_titles: string[];
  style_id?: any;
  style_title?: string;
  alt_style_ids: any[];
  style_ids: any[];
  style_titles: string[];
  classification_id: string;
  classification_title: string;
  alt_classification_ids: string[];
  classification_ids: string[];
  classification_titles: string[];
  subject_id: string;
  alt_subject_ids: any[];
  subject_ids: string[];
  subject_titles: string[];
  material_id: string;
  alt_material_ids: any[];
  material_ids: string[];
  material_titles: string[];
  technique_id: string;
  alt_technique_ids: any[];
  technique_ids: string[];
  technique_titles: string[];
  theme_titles: string[];
  image_id: string;
  alt_image_ids: string[];
  document_ids: any[];
  sound_ids: any[];
  video_ids: any[];
  text_ids: any[];
  section_ids: any[];
  section_titles: any[];
  site_ids: any[];
  suggest_autocomplete_all: SuggestAutocompleteAll[];
  last_updated_source: Date;
  last_updated: Date;
  timestamp: Date;
}

export interface Info {
  license_text: string;
  license_links: string[];
  version: string;
}

export interface Config {
  iiif_url: string;
  website_url: string;
}

