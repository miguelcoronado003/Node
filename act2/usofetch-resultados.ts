async function  fetchData(url: string) {
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }catch (error) {
        console.error('Error', error);
    }
}

fetchData('https://jsonplaceholder.typicode.com/posts');