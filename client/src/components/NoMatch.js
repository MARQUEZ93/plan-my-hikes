import { Link } from "react-router-dom";
import Homepage  from "./Homepage";
function NoMatch() {
    return (
      <Homepage splash={false} notFound={true}>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </Homepage>
    );
};
export default NoMatch;