import Email from "./Email";

// FYI: PROP DRILLING
// https://dev.to/codeofrelevancy/what-is-prop-drilling-in-react-3kol

function Emails(props) {
  // const props = {
  //   emails: []
  //   toggleStar: function()
  //   toggleRead: function()
  // }

  return (
    <ul>
      {props.emails.map((email, index) => (
        <Email
          email={email}
          toggleStar={props.toggleStar}
          toggleRead={props.toggleRead}
          key={index}
        />
      ))}
    </ul>
  );
}

export default Emails;
