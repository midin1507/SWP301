export const example = async (userId) => {
    const api_url = import.meta.env.VITE_API_URL;

    const response = await fetch(`${api_url}/users/${userId}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },  
            body: JSON.stringify({
                FullName: "John Doe",
                DateOfBirth: "1990-01-01",
                Avatar: new File([""], "avatar.jpg", { type: "image/jpeg" }),
                
            }),
        }
    );

    if (response.ok) {
        const data = await response.json();
        return data;
    }

    return null;
};