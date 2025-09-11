/*
-On initializing a variable with an object in TS, it assumes that the properties of the object
might change values later.

Use cases:
-APIs with specific string values, HTTP methods, status codes.
-React components with limited prop values.
-Configuration objects that shouldn't change?
-Any function that expects exact string or number values.


*/