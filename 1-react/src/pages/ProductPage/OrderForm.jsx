import React from "react";
import FormControl from "../../components/FormControl";

const OrderForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <form className="OrderForm" id="order-form" onSubmit={handleSubmit}>
      <FormControl htmlFor={"deliveryAddress"} label={"주소"} required>
        <input
          type="text"
          id="deliveryAddress"
          name="deliveryAddress"
          placeholder="배달받을 주소를 입력하세요"
          autoFocus
          required
        />
      </FormControl>
      <FormControl htmlFor={"deliveryContact"} label={"연락처"} required>
        <input
          type="text"
          pattern="^\d{2,3}-\d{3,4}-\d{4}$"
          id="deliveryContact"
          name="deliveryContact"
          placeholder="연락처를 입력하세요"
          autoFocus
          required
        />
      </FormControl>
      <FormControl htmlFor={"paymentMethod"} label={"결재수단"} required>
        <select
          type="select"
          id="paymentMethod"
          name="paymentMethod"
          autoFocus
          required
        >
          <option value="myPay">마이페이</option>
          <option value="naverPay">네이버페이</option>
          <option value="samsungPay">삼성페이</option>
        </select>
      </FormControl>
      <FormControl htmlFor={"messageToShop"} label={"가게 사장님께"}>
        <textarea id="messageToShop" name="messageToShop" autoFocus />
      </FormControl>
      <FormControl htmlFor={"messageToRider"} label={"라이더님께"}>
        <textarea id="messageToRider" name="messageToRider" autoFocus />
      </FormControl>
    </form>
  );
};

export default OrderForm;
