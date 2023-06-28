import { useEffect, useState } from "react";
import "./customerlists.scss";
import axios from "axios";

function Customerlists() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get("https://mainapi.code-max.com/allcustomer")
      .then((response) => {
        const sortedCustomers = response.data.sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at);
          });
          setCustomers(sortedCustomers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="customerlist-section">
      <h2>รายชื่อลูกค้าลงทะเบียน</h2>
      <div className="customerInfo">
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Image</th>
              <th>Submit Date</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr  key={customer.id}>
                <td>{index + 1}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>
                  <a href={'https://mainapi.code-max.com/uploads/'+customer.image} target="_blank" rel="noopener noreferrer">
                    Click
                  </a>
                </td>
                <td>{customer.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customerlists;
