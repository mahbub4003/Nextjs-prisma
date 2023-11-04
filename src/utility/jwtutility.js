import * as jose from "jose";
export const createToken = async (email, id) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECREt);
  const alg = "HS256";

  const token = await new jose.SignJWT({ email, id })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPARATION_TIME)
    .sign(secret);
  return token;
};

export const verifyToken = async (token) => {
  const secret = new TextEncoder().encode("123-ABC-XYZ");
  try {
    const decode = await jose.jwtVerify(token, secret);
    return decode.payload;
  } catch (error) {
    console.error("Token verification failed:", error.toString());
    return null;
  }
};
