export interface IAuthors {
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
    id:                        string;
    orcid:                     null | string;
    display_name:              string;
    display_name_alternatives: string[];
    works_count:               number;
    cited_by_count:            number;
    summary_stats:             SummaryStats;
    ids:                       IDS;
    affiliations:              Affiliation[];
    last_known_institution:    Institution;
    last_known_institutions:   Institution[];
    x_concepts:                XConcept[];
    counts_by_year:            CountsByYear[];
    works_api_url:             string;
    updated_date:              Date;
    created_date:              Date;
}

export interface Affiliation {
    institution: Institution;
    years:       number[];
}

export interface Institution {
    id:           string;
    ror:          string;
    display_name: string;
    country_code: CountryCode;
    type:         Type;
    lineage:      string[];
}

export enum CountryCode {
    Au = "AU",
    CA = "CA",
    CN = "CN",
    Es = "ES",
    Fr = "FR",
    GB = "GB",
    Jp = "JP",
    Kr = "KR",
    MX = "MX",
    My = "MY",
    Nl = "NL",
    Rs = "RS",
    Tw = "TW",
    Ua = "UA",
    Us = "US",
}

export enum Type {
    Company = "company",
    Education = "education",
    Facility = "facility",
    Government = "government",
    Healthcare = "healthcare",
    Nonprofit = "nonprofit",
    Other = "other",
}

export interface CountsByYear {
    year:           number;
    works_count:    number;
    cited_by_count: number;
}

export interface IDS {
    openalex: string;
    orcid?:   string;
    scopus?:  string;
}

export interface SummaryStats {
    "2yr_mean_citedness": number;
    h_index:              number;
    i10_index:            number;
}

export interface XConcept {
    id:           string;
    wikidata:     string;
    display_name: string;
    level:        number;
    score:        number;
}
