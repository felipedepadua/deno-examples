// FROM https://docs.deno.com/runtime/manual/getting_started/first_steps/#remote-modules-and-the-deno-standard-library

// Deno provides a built-in test runner, which uses an assertion module distributed via HTTPS URL.

import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import Person, { sayHello } from "./person.ts";

Deno.test("sayHello function", () => {
  const grace: Person = {
    lastName: "Hopper",
    firstName: "Grace",
  };

  assertEquals("Hello, Wrongfirstname!", sayHello(grace));
});

// Run: > deno test person_test.ts