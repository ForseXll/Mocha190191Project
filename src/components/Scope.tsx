const Scope = () => {
  return (
    <>
      <h1>Scope</h1>
      <ul style={{ display: "grid" }}>
        <li style={{ padding: "5px" }}>
          The application will allow browsing and purchasing products while
          maintaining cart state with no user sign-in required.
        </li>
        <li style={{ padding: "5px" }}>
          Allow users to purchase products using billing verification from
          third-party software like stripe.
        </li>
        <li style={{ padding: "5px" }}>
          Create an admin portal for the owner to add, delete and modify product
          information. This portal will require login credentials.
        </li>
        <li style={{ padding: "5px" }}>
          The project's goal is to create an fully functioning e-commerce
          website.
        </li>
        <li style={{ padding: "5px" }}>
          Online advertisement is also another issue that will be resolved using
          search engine optimizations. Furthermore, their social media accounts
          will have links to the e-commerce website for users that want to
          purchase the product.
        </li>
      </ul>
    </>
  );
};

export default Scope;
