export interface IWorks {
    meta:     Meta;
    results:  Result[];
    group_by: any[];
}

export interface Meta {
    count:               number;
    db_response_time_ms: number;
    page:                number;
    per_page:            number;
    groups_count:        null;
}

export interface Result {
    id:                            string;
    doi:                           null | string;
    title:                         string;
    display_name:                  string;
    relevance_score:               number;
    publication_year:              number;
    publication_date:              Date;
    ids:                           IDS;
    language:                      Language | null;
    primary_location:              Location;
    type:                          ResultType;
    type_crossref:                 string;
    open_access:                   OpenAccess;
    authorships:                   Authorship[];
    countries_distinct_count:      number;
    institutions_distinct_count:   number;
    corresponding_author_ids:      string[];
    corresponding_institution_ids: string[];
    apc_list:                      Apc | null;
    apc_paid:                      Apc | null;
    has_fulltext:                  boolean;
    fulltext_origin?:              string;
    cited_by_count:                number;
    cited_by_percentile_year:      CitedByPercentileYear;
    biblio:                        Biblio;
    is_retracted:                  boolean;
    is_paratext:                   boolean;
    keywords:                      Keyword[];
    concepts:                      Concept[];
    mesh:                          Mesh[];
    locations_count:               number;
    locations:                     Location[];
    best_oa_location:              Location | null;
    sustainable_development_goals: SustainableDevelopmentGoal[];
    grants:                        any[];
    referenced_works_count:        number;
    referenced_works:              string[];
    related_works:                 string[];
    ngrams_url:                    string;
    abstract_inverted_index:       { [key: string]: number[] } | null;
    cited_by_api_url:              string;
    counts_by_year:                CountsByYear[];
    updated_date:                  Date;
    created_date:                  Date;
}

export interface Apc {
    value:      number;
    currency:   string;
    value_usd:  number;
    provenance: string;
}

export interface Authorship {
    author_position:         AuthorPosition;
    author:                  Author;
    institutions:            Institution[];
    countries:               string[];
    is_corresponding:        boolean;
    raw_author_name:         string;
    raw_affiliation_string:  string;
    raw_affiliation_strings: string[];
}

export interface Author {
    id:           string;
    display_name: string;
    orcid:        null | string;
}

export enum AuthorPosition {
    First = "first",
    Last = "last",
    Middle = "middle",
}

export interface Institution {
    id:           string;
    display_name: string;
    ror:          string;
    country_code: string;
    type:         string;
    lineage:      string[];
}

export interface Location {
    is_oa:            boolean;
    landing_page_url: string;
    pdf_url:          null | string;
    source:           Source | null;
    license:          null | string;
    version:          Version | null;
    is_accepted:      boolean;
    is_published:     boolean;
}

export interface Source {
    id:                              string;
    display_name:                    string;
    issn_l:                          null | string;
    issn:                            string[] | null;
    is_oa:                           boolean;
    is_in_doaj:                      boolean;
    host_organization:               null | string;
    host_organization_name:          null | string;
    host_organization_lineage:       string[];
    host_organization_lineage_names: string[];
    type:                            SourceType;
}

export enum SourceType {
    Conference = "conference",
    EbookPlatform = "ebook platform",
    Journal = "journal",
    Repository = "repository",
}

export enum Version {
    PublishedVersion = "publishedVersion",
    SubmittedVersion = "submittedVersion",
}

export interface Biblio {
    volume:     null | string;
    issue:      null | string;
    first_page: null | string;
    last_page:  null | string;
}

export interface CitedByPercentileYear {
    min: number;
    max: number;
}

export interface Concept {
    id:           string;
    wikidata:     string;
    display_name: string;
    level:        number;
    score:        number;
}

export interface CountsByYear {
    year:           number;
    cited_by_count: number;
}

export interface IDS {
    openalex: string;
    doi?:     string;
    mag?:     string;
    pmid?:    string;
}

export interface Keyword {
    keyword: string;
    score:   number;
}

export enum Language {
    En = "en",
    Fr = "fr",
    ID = "id",
    Ja = "ja",
}

export interface Mesh {
    descriptor_ui:   string;
    descriptor_name: string;
    qualifier_ui:    string;
    qualifier_name:  null;
    is_major_topic:  boolean;
}

export interface OpenAccess {
    is_oa:                       boolean;
    oa_status:                   OaStatus;
    oa_url:                      null | string;
    any_repository_has_fulltext: boolean;
}

export enum OaStatus {
    Bronze = "bronze",
    Closed = "closed",
    Gold = "gold",
    Hybrid = "hybrid",
}

export interface SustainableDevelopmentGoal {
    id:           string;
    display_name: string;
    score:        number;
}

export enum ResultType {
    Article = "article",
    Book = "book",
    BookChapter = "book-chapter",
    Dissertation = "dissertation",
}
