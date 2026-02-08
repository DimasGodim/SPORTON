export async function FetchApi <data>(endpoint: string, options?: RequestInit): Promise <data> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {...options, cache: options?.cache || 'no-store'})
    
    if (!res.ok){
        let errorMessage = `Failed to fetch data from ${endpoint}`;
        try{
            const errorData = await res.json();
            errorMessage = errorData.message || errorData.error || errorMessage;
        } catch (data) {
            console.log(data);
        }
        throw new Error(errorMessage);
    }

    return res.json()
}

export function GetImageUrl(path: string){
    if (path.startsWith("http")) return path;
    if (path.startsWith("https")) return path;
    return `${process.env.NEXT_PUBLIC_API_ROOT}/${path}`; 
}

export function GetAuthHeaders() {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
  };
}