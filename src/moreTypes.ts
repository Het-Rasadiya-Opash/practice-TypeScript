let response: any = "43";

let numbericaLength: number = (response as string).length;
console.log(numbericaLength);


type Book = {
  name: string;
};
let bookString = '{"name":"One thing"}';
let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject.name);

// const inputElement = document.getElementById("username") as HTMLInputElement;

let value: any;
value = "abc";
value = [1, 2, 3];
value = 2.6;
// value.toUpperCase();

let newValue: unknown;
newValue = "abc";
// newValue = [1, 2, 3];
// newValue = 2.6;
if (typeof newValue === "string") {
  console.log(newValue.toUpperCase());
}

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}

const data: unknown = "Het Rasadiya";
const strData: string = data as string;

//never
type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to Dashboard");
    return;
  }
  if (role === "user") {
    console.log("Redirecting to User Dashboard");
    return;
  }
  role; //never
}
redirectBasedOnRole("admin");

function neverReturn(): never {
  while (true) {}
}
