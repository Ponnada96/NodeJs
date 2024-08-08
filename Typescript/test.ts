let value: unknown;
value = true;
value = 1,
    value = "hellow";

if (typeof value === "string") {
    value = value.toUpperCase()
}
console.log(value);