const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchProperties() {
  try {
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      console.error('API domain is not defined in environment variables');
      return [];
    }

    const res = await fetch(`${apiDomain}/properties`);

    if (!res.ok) {
      throw new Error('Failed to fetch data. Response status: ' + res.status);
    }

    const data = await res.json();

    // Validate if data is in expected format
    if (!Array.isArray(data)) {
      throw new Error('Unexpected response format');
    }

    return data;
  } catch (error) {
    console.error('Error fetching properties:', error.message);
    return [];
  }
}

export { fetchProperties };