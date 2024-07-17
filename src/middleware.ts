export { default } from "next-auth/middleware";
export const config = { matcher: ["/customer/:path*", "/products/:id/:path*"] };
