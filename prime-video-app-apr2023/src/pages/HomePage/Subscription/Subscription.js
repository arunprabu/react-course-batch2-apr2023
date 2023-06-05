import "./Subscription.css";

const Subscription = () => {
  // internal styles
  const subscriptionStyles = {
    renewStyles: {
      backgroundColor: "yellow",
      color: "#000",
      padding: "20px",
      border: "solid 3px red",
      borderRadius: "10px",
    },
    btnStyles: {
      backgroundColor: "red",
      color: "#fff",
      padding: "10px 20px",
      border: "solid 3px darkred",
      borderRadius: "10px",
    },
  };

  return (
    // using external css class from third party -- bootstrap
    <div className="subscription text-center">
      {/*  External CSS -- [RECOMMENDED] Subscription.css */}
      <h3 className="subscription-info">
        You are an Active Subscriber of Prime Video
      </h3>

      {/* Inline CSS -- NEVER EVER TRY THIS IN LISTS / Loops */}
      <p
        style={{
          backgroundColor: "red",
          color: "#fff",
          padding: "20px",
          border: "solid 3px #ccc",
        }}
      >
        Your subscription will end in two weeks
      </p>

      {/* Internal CSS - Not recommended often */}
      <p style={subscriptionStyles.renewStyles}>
        Renew now and get 50% discount. Use Coupon Code: OFFER50
      </p>
      <button type="button" style={subscriptionStyles.btnStyles}>
        RENEW NOW
      </button>
    </div>
  );
};

export default Subscription;
