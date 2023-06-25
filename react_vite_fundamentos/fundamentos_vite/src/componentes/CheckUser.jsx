const CheckUser = ({ user }) => (
  //   user ? <p>User Online😄</p> : <p>User Offline😫</p>;
  <p> {user ? "User Online😄" : "User Offline😫"}</p>
);

export default CheckUser;
