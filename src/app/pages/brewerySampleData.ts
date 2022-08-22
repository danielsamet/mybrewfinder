export type Brewery = {
    id: string;
    name: string;
    brewery_type: string;
    street: string;
    address_2: string | null;
    address_3: string | null;
    city: string;
    state: string;
    county_province: string | null;
    postal_code: string;
    country: string;
    longitude: string | null;
    latitude: string | null;
    phone: string | null;
    website_url: string | null;
    updated_at: string;
    created_at: string;
};

export const sampleBreweryData: Brewery[] = [
    {
        "id": "5-rabbit-cerveceria-inc-chicago",
        "name": "5 Rabbit Cerveceria Inc",
        "brewery_type": "micro",
        "street": "6398 W 74th St",
        "address_2": null,
        "address_3": null,
        "city": "Chicago",
        "state": "Illinois",
        "county_province": null,
        "postal_code": "60638-6129",
        "country": "United States",
        "longitude": "-87.6572069",
        "latitude": "41.7595502",
        "phone": "3128959591",
        "website_url": "http://www.5rabbitbrewery.com",
        "updated_at": "2022-08-20T02:56:08.975Z",
        "created_at": "2022-08-20T02:56:08.975Z"
    },
    {
        "id": "alarmist-brewing-co-chicago",
        "name": "Alarmist Brewing Co",
        "brewery_type": "micro",
        "street": "4055 W Peterson Ave Ste REAR",
        "address_2": null,
        "address_3": null,
        "city": "Chicago",
        "state": "Illinois",
        "county_province": null,
        "postal_code": "60646-6072",
        "country": "United States",
        "longitude": null,
        "latitude": null,
        "phone": "7739882536",
        "website_url": "http://alarmistbrewing.com",
        "updated_at": "2022-08-20T02:56:08.975Z",
        "created_at": "2022-08-20T02:56:08.975Z"
    },
]