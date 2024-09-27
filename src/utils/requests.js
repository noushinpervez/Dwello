const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch properties
async function fetchProperties() {
  try {
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      console.error('API domain is not defined in environment variables');
      return [];
    }

    const res = await fetch(`${apiDomain}/properties`);

    if (!res.ok) {
      throw new Error('Failed to fetch properties. Response status: ' + res.status);
    }

    const data = await res.json();
    
    return data;
  } catch (error) {
    console.error('Error fetching properties:', error.message);
    return [];
  }
}

// Fetch single property
async function fetchPropertyById(propertyId) {
  try {
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      console.error('API domain is not defined in environment variables');
      return null;
    }

    const res = await fetch(`${apiDomain}/properties/${propertyId}`);

    if (!res.ok) {
      throw new Error('Failed to fetch properties. Response status: ' + res.status);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error('Error fetching properties:', error.message);
    return null;
  }
}

export { fetchProperties, fetchPropertyById };