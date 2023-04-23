import { useState } from "react";

const Event_ex = () => {
  const [states, setState] = useState({ name: "", email: "" });
  const [list, setList] = useState([
    { name: "코디", email: "codi@gmail.com" },
    { name: "윤소희", email: "yoonsohee@gmail.com" },
  ]);

  const onChange = (e) => {
    const { value, name } = e.target;

    setState({
      ...states,
      [name]: value,
    });
    console.log(states);
  };

  const addState = () => {
    if (states.name.trim().length === 0 || states.email.trim().length === 0)
      return;
    const newState = list.concat({
      name: states.name,
      email: states.email,
    });

    setList(newState);
    setState({ name: "", email: "" });
  };

  return (
    <>
      <input type="text" name="name" value={states.name} onChange={onChange} />
      <input
        type="email"
        name="email"
        value={states.email}
        onChange={onChange}
      />
      <button onClick={addState}>등록</button>
      {list.map((value) => {
        console.log(value);
        return (
          <h1>
            {value.name} : {value.email}
          </h1>
        );
      })}
    </>
  );
};

export default Event_ex;
