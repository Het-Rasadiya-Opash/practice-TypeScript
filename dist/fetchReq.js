const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!response.ok) {
            throw new Error(`HTTP Erorr ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
};
fetchData();
export {};
//# sourceMappingURL=fetchReq.js.map