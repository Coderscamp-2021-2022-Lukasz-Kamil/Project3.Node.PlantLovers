type DecodedToken = {
  raw: string;
  header: {
    alg: string;
    typ: string;
  };
  payload: {
    sub: string;
    rol: boolean;
    iat: number;
    exp: number;
  };
};

function jwtDecode(t: string) {
  const token: DecodedToken = {
    raw: "",
    header: {
      alg: "",
      typ: "",
    },
    payload: {
      sub: "",
      rol: false,
      iat: 0,
      exp: 0,
    },
  };
  token.raw = t;
  token.header = JSON.parse(window.atob(t.split(".")[0]));
  token.payload = JSON.parse(window.atob(t.split(".")[1]));
  return token;
}

export default jwtDecode;
