import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
    const options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'insomnia/8.6.1',
            Authorization: 'Bearer d19effe98b3fee430f2ac709aa87a038425dc102c750447ad9b665089a31e87ffeec0c863e29d37f4d13bdac56a81aaf6f68ce68bcc2b0c67d2a33bcfe713931200b426b4410c2a97dcbc96adfd30c42a6780846d560110ec15f51e1ec35e2712a924d18d6573825847681ed6495fc74a2fecb99557f233706d047cf864e2799'
        },
    };

    const res = await fetch(`${API_URL}${endpoint}`, options);
    const data = await res.json();

    return data;
};

export const makePaymentRequest = async (endpoint, payload) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
            Authorization: 'Bearer d19effe98b3fee430f2ac709aa87a038425dc102c750447ad9b665089a31e87ffeec0c863e29d37f4d13bdac56a81aaf6f68ce68bcc2b0c67d2a33bcfe713931200b426b4410c2a97dcbc96adfd30c42a6780846d560110ec15f51e1ec35e2712a924d18d6573825847681ed6495fc74a2fecb99557f233706d047cf864e2799',
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data;
};