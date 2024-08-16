// From Deno Tutorial: https://docs.deno.com/runtime/manual/getting_started/first_steps/

import Person, { sayHello } from "./person.ts";

const ada: Person = {
  lastName: "Lovelace",
  firstName: "Ada",
};

console.log(sayHello(ada));
  
// You can execute it with the following command:
//   deno run hello.ts
