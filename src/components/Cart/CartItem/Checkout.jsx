import { useEffect, useState, useMemo, useCallback } from "react";
import "./Checkout.scss";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";

function Checkout() {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);
  const [product, setProduct] = useState(() => {
    const stored = localStorage.getItem("watch");
    try {
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [days, setDays] = useState("Saturday");

  useEffect(() => {
    if (product.length > 0) {
      localStorage.setItem("watch", JSON.stringify(product));
    } else {
      localStorage.removeItem("watch");
    }
  }, [product]);

  const total = useMemo(
    () => product.reduce((acc, item) => acc + (item.price || 0), 0),
    [product]
  );

  const sendToWhatsApp = useCallback(() => {
    if (!product.length || !phone || !address) return;

    const phoneNumber = "201009014597";
    const message = encodeURIComponent(
      `Order\n` +
        product
          .map(
            (p) => `Product: ${p.title || "N/A"}\nPrice: ${p.price || "N/A"}`
          )
          .join("\n") +
        `\nAddress: ${address}\nPhone: ${phone}\nDay: ${days}\nTotal: ${total}`
    );

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");

    // Reset state + localStorage
    setProduct([]);
    localStorage.clear();

    localStorage.removeItem("watch");
    setAddress("");
    setPhone("");
    navigate("/");
window.location.reload();

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [product, phone, address, days, total, navigate]);

  // 🔹 إزالة منتج واحد
  const handleRemove = useCallback(
    (id) => {
      setProduct((prev) => prev.filter((item) => item.id !== id));
    },
    [setProduct]
  );

  // 🔹 Scroll once only
  useEffect(() => {
    if (!scroll) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setScroll(true);
    }
  }, [scroll]);

  if (!product.length) {
    return <p className="p">No product found in your cart...</p>;
  }

  const weekDays = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  return (
    <form className="checkout">
      <div className="data">
        {product.map((item) => (
          <div className="item" key={item.id}>
            <div style={{ display: "flex" }}>
              <img
                className="img"
                src={item.img}
                alt={item.title}
                width={160}
                height={160}
                loading="lazy"
              />
              <div>
                <h1>{item.title}</h1>
                <p>${item.price}</p>
                <p>{item.category}</p>
              </div>
            </div>
            <MdClose
              style={{ fontSize: "18px", cursor: "pointer" }}
              onClick={() => handleRemove(item.id)}
            />
          </div>
        ))}
      </div>

      <div className="check">
        <div className="address">
          <label className="add" htmlFor="address">
            ADDRESS
          </label>
          <input
            className="input"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            required
          />
        </div>

        <div className="phone">
          <label className="add" htmlFor="phone">
            PHONE NUMBER
          </label>
          <input
            className="input"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            required
          />
        </div>

        <div className="days">
          {weekDays.map((day) => (
            <div
              key={day}
              onClick={() => setDays(day)}
              className={days === day ? "day active" : "day"}
            >
              {day}
            </div>
          ))}
        </div>

        <div className="total">
          <h1>TOTAL</h1>
          <span>${total}</span>
        </div>

        <button className="sub" type="button" onClick={sendToWhatsApp}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default Checkout;
