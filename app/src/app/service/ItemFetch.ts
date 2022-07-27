const API = 'http://localhost:5000/api/'

export async function POST(path: string, settings: any) {
    const response = await fetch(API+path, settings);
    const dataJson = await response.json();
    return {dataJson, response};
}

export async function GET_ALL(path: string, settings: any) {
    const response = await fetch(API+path, settings);
    const dataJson = await response.json();
    return {dataJson, response};
}