"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = "43";
let numbericaLength = response.length;
let bookString = '{"name":"One thing"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject.name);
// const inputElement = document.getElementById("username") as HTMLInputElement;
let value;
value = "abc";
value = [1, 2, 3];
value = 2.6;
// value.toUpperCase();
let newValue;
newValue = "abc";
// newValue = [1, 2, 3];
// newValue = 2.6;
if (typeof newValue === "string") {
    console.log(newValue.toUpperCase());
}
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
}
const data = "Het Rasadiya";
const strData = data;
function redirectBasedOnRole(role) {
    if (role === "admin") {
        console.log("Redirecting to Dashboard");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to User Dashboard");
        return;
    }
    role;
}
redirectBasedOnRole("admin");
//# sourceMappingURL=moreTypes.js.map