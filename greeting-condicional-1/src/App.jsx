import React from "react";

const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: "linear-gradient(to right, #36B1EF, #6466F2)",
  height: "100vh",
  width: "100vw",
}

const horario = {
  fontSize: 120,
  margin: 0,
}

const texto = {
  fontSize: 40,
  textAlign: "center",
  margin: 0,
}

function App() {
  const date = new Date();
  const [hours, setHours] = React.useState(date.getHours());
  const [minutes, setMinutes] = React.useState(date.getMinutes());
  const [seconds, setSeconds] = React.useState(date.getSeconds());
  const [frase, setFrase] = React.useState("");

  React.useEffect(() => {
    const interval = setInterval(() => {
      setHours(date.getHours())
      setMinutes(date.getMinutes())
      setSeconds(date.getSeconds())
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  React.useEffect(() => {
    if (hours >= 0 && hours < 12) {
      setFrase("Bom dia! 😃");
    } else if (hours >= 12 && hours < 19) {
      setFrase("Boa tarde! 🤗");
    } else if (hours >= 19 || (hours <= 23)) {
      setFrase("Boa noite! 🥱");
    }
  }, [hours]);

  return (
    <div style={container}>
      <p style={horario}>
        {hours < 10 ? `0${hours}` : hours}
        :{minutes < 10 ? `0${minutes}` : minutes}
        :{seconds < 10 ? `0${seconds}` : seconds}
      </p>
      <p style={texto}>{frase}</p>
    </div>
  );
}

export default App
