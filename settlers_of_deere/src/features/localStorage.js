export const loadUser = () => {
    try {
        const serializedToken = localStorage.getItem("authToken");
        if (serializedToken === null ) {
            return undefined;
        }
        return JSON.parse(serializedToken);
    } catch(err) {
        return undefined;
    }
};

export const saveToken = (Token) => {
    try {
        const serializedToken = JSON.stringify(Token);
        localStorage.setItem("authToken", serializedToken);
    } catch (err) {
        // ignore write errors
    }
}