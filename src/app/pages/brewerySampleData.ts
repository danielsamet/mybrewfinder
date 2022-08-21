type Brewery = {
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
    longitude: string;
    latitude: string;
    phone: string | null;
    website_url: string | null;
    updated_at: string;
    created_at: string;
};

export const sampleMapData: Brewery[] = [
    {
        "id": "10-barrel-brewing-co-san-diego",
        "name": "10 Barrel Brewing Co",
        "brewery_type": "large",
        "street": "1501 E St",
        "address_2": null,
        "address_3": null,
        "city": "San Diego",
        "state": "California",
        "county_province": null,
        "postal_code": "92101-6618",
        "country": "United States",
        "longitude": "-117.129593",
        "latitude": "32.714813",
        "phone": "6195782311",
        "website_url": "http://10barrel.com",
        "updated_at": "2022-08-20T02:56:08.975Z",
        "created_at": "2022-08-20T02:56:08.975Z"
    },
    {
        "id": "2kids-brewing-company-san-diego",
        "name": "2Kids Brewing Company",
        "brewery_type": "micro",
        "street": "8680 Miralani Dr Ste 123",
        "address_2": null,
        "address_3": null,
        "city": "San Diego",
        "state": "California",
        "county_province": null,
        "postal_code": "92126-6391",
        "country": "United States",
        "longitude": "-117.137429",
        "latitude": "32.896584",
        "phone": "8584805437",
        "website_url": "http://www.2kidsBrewing.com",
        "updated_at": "2022-08-20T02:56:08.975Z",
        "created_at": "2022-08-20T02:56:08.975Z"
    },
    {
        "id": "32-north-brewing-co-san-diego",
        "name": "32 North Brewing Co",
        "brewery_type": "closed",
        "street": "8655 Production Ave Ste A",
        "address_2": null,
        "address_3": null,
        "city": "San Diego",
        "state": "California",
        "county_province": null,
        "postal_code": "92121-2258",
        "country": "United States",
        "longitude": "-117.1649841601659",
        "latitude": "32.88313236843027",
        "phone": null,
        "website_url": null,
        "updated_at": "2022-08-20T02:56:08.975Z",
        "created_at": "2022-08-20T02:56:08.975Z"
    }
]