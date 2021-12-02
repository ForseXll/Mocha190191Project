import { Typography } from "@mui/material";

const Title = () => {
  return (
    <div>
      <Typography
        variant="h6"
        style={{ padding: "10px", fontFamily: "Didot, serif" }}
      >
        Team Name: Mocha
      </Typography>
      <Typography
        variant="h6"
        style={{ padding: "10px", fontFamily: "Didot, serif" }}
      >
        Team Members:Ilya Indik, Andrey Kurudimov, Justin Singh, Monica Suase,
        Jared Petersen, Christian Suarez
      </Typography>
      <Typography
        variant="h6"
        style={{ padding: "10px", fontFamily: "Didot, serif" }}
      >
        Client: Vladimir Klimkiv CEO of EmberFrost
      </Typography>
      <Typography
        variant="h6"
        style={{ padding: "10px", fontFamily: "Didot, serif" }}
      >
        Adviser: Profesor Lim
      </Typography>
    </div>
  );
};

export default Title;
