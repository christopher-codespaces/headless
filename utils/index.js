export async function storefront(query, variables = {}) {
    try {
        const response = await fetch(NEXT_PUBLIC_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': NEXT_PUBLIC_ACCESS_TOKEN
            },
            body: JSON.stringify({
                query,
                variables,
            }),
        });

        // Check if response is ok
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse response body as JSON
        return await response.json();
    } catch (error) {
        // Handle errors
        console.error('Error:', error.message);
        // You can choose to throw the error further if needed
        throw error;
    }
}
