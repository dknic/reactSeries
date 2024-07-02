const Footer = ({ itemlength }) => {
  return (
    <div>
      <p>
        {itemlength >= 2
          ? `List items=${itemlength}`
          : `List item= ${itemlength}`}{" "}
      </p>
    </div>
  );
};

export default Footer;
