export class CharacterDataWrapper {
    code?: number;
    status?: string;
    copyright?: string;
    attributionText?: string;
    attributionHTML?: string;
    data?: CharacterDataContainer;
    etag?: string;
}

class CharacterDataContainer {
    offset?: number;
    limit?: number;
    total?: number;
    count?: number;
    results?: Character[];
}

export class DataDetailHero {
    name?: string;
    image?: string;
    comics?: number;
    series?: number;
    stories?: number;
}

export class ComicDataContainer {
    offset?: number;
    limit?: number;
    total?: number;
    count?: number;
    //results?: Character[];
}

export class Character {
    id?: number;
    name?: string;
    description?: string;
    modified?: Date;
    resourceURI?: string;
    urls?: Url[];
    thumbnail?: CharacterImage;
    comics?: ComicList;
    stories?: StoryList;
    events?: EventList;
    series?: SeriesList;

    toImage(): string {
        return this.thumbnail?.path + '.' + this.thumbnail?.extension;
    }
}

class Url {
    type?: string;
    url?: string;
}

export class CharacterImage {
    path?: string;
    extension?: string;

}

class ComicList {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: ComicSummary[];
}

class ComicSummary {
    resourceURI?: string;
    name?: string;
}

class StoryList {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: StorySummary[];
}

class StorySummary {
    resourceURI?: string;
    name?: string;
    type?: string;
}

class EventList {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: EventSummary[];
}

class EventSummary {
    resourceURI?: string;
    name?: string;
}

class SeriesList {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: SeriesSummary[];
}

class SeriesSummary {
    resourceURI?: string;
    name?: string;
}