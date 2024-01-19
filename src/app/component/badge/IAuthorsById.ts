export interface IAuthorsByID {
    id:                        string;
    orcid:                     null;
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
    country_code: string;
    type:         string;
    lineage:      string[];
}

export interface CountsByYear {
    year:           number;
    works_count:    number;
    cited_by_count: number;
}

export interface IDS {
    openalex: string;
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
