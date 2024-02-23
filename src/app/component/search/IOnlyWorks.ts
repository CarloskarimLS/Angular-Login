export interface IOnlyWorks {
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
    doi:                           string;
    title:                         null | string;
    display_name:                  null | string;
    publication_year:              number;
    publication_date:              Date;
    ids:                           IDS;
    language:                      Language;
    primary_location:              Location;
    type:                          ResultType;
    type_crossref:                 TypeCrossref;
    indexed_in:                    IndexedIn[];
    open_access:                   OpenAccess;
    authorships:                   Authorship[];
    countries_distinct_count:      number;
    institutions_distinct_count:   number;
    corresponding_author_ids:      string[];
    corresponding_institution_ids: string[];
    apc_list:                      Apc | null;
    apc_paid:                      Apc | null;
    has_fulltext:                  boolean;
    cited_by_count:                number;
    cited_by_percentile_year:      CitedByPercentileYear;
    biblio:                        Biblio;
    is_retracted:                  boolean;
    is_paratext:                   boolean;
    primary_topic:                 Topic;
    topics:                        Topic[];
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
    fulltext_origin?:              FulltextOrigin;
}

export interface Apc {
    value:      number;
    currency:   Currency;
    value_usd:  number;
    provenance: Provenance;
}

export enum Currency {
    Eur = "EUR",
    Usd = "USD",
}

export enum Provenance {
    Doaj = "doaj",
}

export interface Authorship {
    author_position:         AuthorPosition;
    author:                  Author;
    institutions:            Institution[];
    countries:               Country[];
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

export enum Country {
    At = "AT",
    CA = "CA",
    Ch = "CH",
    De = "DE",
    GB = "GB",
    Nz = "NZ",
    Us = "US",
}

export interface Institution {
    id:           string;
    display_name: string;
    ror:          string;
    country_code: Country;
    type:         InstitutionType;
    lineage:      string[];
}

export enum InstitutionType {
    Company = "company",
    Education = "education",
    Facility = "facility",
    Government = "government",
    Healthcare = "healthcare",
}

export interface Location {
    is_oa:            boolean;
    landing_page_url: null | string;
    pdf_url:          null | string;
    source:           Source | null;
    license:          License | null;
    version:          Version | null;
    is_accepted:      boolean;
    is_published:     boolean;
}

export enum License {
    CcBy = "cc-by",
    CcByNc = "cc-by-nc",
    CcByNcNd = "cc-by-nc-nd",
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
    Journal = "journal",
    Repository = "repository",
}

export enum Version {
    AcceptedVersion = "acceptedVersion",
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

export enum FulltextOrigin {
    Ngrams = "ngrams",
    PDF = "pdf",
}

export interface IDS {
    openalex: string;
    doi:      string;
    mag?:     string;
    pmid?:    string;
    pmcid?:   string;
}

export enum IndexedIn {
    Crossref = "crossref",
    Pubmed = "pubmed",
}

export interface Keyword {
    keyword: string;
    score:   number;
}

export enum Language {
    En = "en",
}

export interface Mesh {
    descriptor_ui:   string;
    descriptor_name: string;
    qualifier_ui:    string;
    qualifier_name:  null | string;
    is_major_topic:  boolean;
}

export interface OpenAccess {
    is_oa:                       boolean;
    oa_status:                   string;
    oa_url:                      null | string;
    any_repository_has_fulltext: boolean;
}

export interface Topic {
    id:           string;
    display_name: string;
    score:        number;
    subfield:     Domain;
    field:        Domain;
    domain:       Domain;
}

export interface Domain {
    id:           string;
    display_name: string;
}

export interface SustainableDevelopmentGoal {
    display_name: string;
    id:           string;
    score:        number;
}

export enum ResultType {
    Article = "article",
    Book = "book",
}

export enum TypeCrossref {
    JournalArticle = "journal-article",
    Monograph = "monograph",
    ProceedingsArticle = "proceedings-article",
}
