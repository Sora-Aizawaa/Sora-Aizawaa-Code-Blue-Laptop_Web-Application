import { useState, useEffect } from "react";
import Header from "../component/header";
import Footer from "../Component/Footer";

const Receipt = () => {
  const [data, setData] = useState({
    name: "",
    extraNotes: "",
    subtotal: 0.0,
    shipping: 0.0,
    discount: 0,
    total: 0.0,
  });

  const [items, setItems] = useState([]);
  const [totals, setTotals] = useState({ subtotal: 0, total: 0 });

  const handleChange = (e, field) => {
    setData({ ...data, [field]: e.target.value });
  };

  const handleInputChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] =
      field === "quantity" || field === "amount"
        ? value === ""
          ? ""
          : parseFloat(value) || 0
        : value;
    setItems(newItems);
    calculateTotals(newItems);
  };

  const calculateTotals = (updatedItems) => {
    let subtotal = updatedItems.reduce((sum, item) => {
      const quantity = parseFloat(item.quantity) || 0;
      const amount = parseFloat(item.amount) || 0;
      return sum + quantity * amount;
    }, 0);

    setTotals({ subtotal, total: subtotal }); // Bisa ditambah diskon atau pajak nanti
  };

  const addRow = () => {
    setItems([...items, { description: "", quantity: "", amount: "" }]);
  };

  const formatRupiah = (angka) => {
    return "Rp. " + angka.toLocaleString("id-ID").replace(/,00$/, "");
  };

  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
    const formattedTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    setCurrentDateTime(`${formattedDate} - ${formattedTime}`);
  }, []);

  const printReceipt = () => {
    const receiptElement = document.getElementById("receipt");
    if (!receiptElement) {
      alert("Receipt tidak ditemukan!");
      return;
    }

    const receiptContent = receiptElement.innerHTML;
    const printWindow = window.open("", "_blank");

    if (!printWindow) {
      alert("Popup diblokir oleh browser! Izinkan pop-up dan coba lagi.");
      return;
    }

    printWindow.document.open();
    printWindow.document.write(`
      <html>
                    <head>
                        <title>Print Receipt</title>
                        <style>
                            @page { size: A4; margin: 20mm; }
                            body { font-family: Arial, sans-serif; font-size: 12pt; }
                            .receipt-container { width: 100%; max-width: 800px; margin: auto; }
                            .text-right { text-align: right; }
                            .border-t { border-top: 1px solid #ccc; padding-top: 10px; margin-top: 10px; }
                            .border-b { border-bottom: 1px solid #ccc; padding-bottom: 5px; }
                            table { width: 100%; border-collapse: collapse; }
                            th, td { border-bottom: 1px solid #ddd; padding: 8px; text-align: left; }
                            th { background-color: #f8f8f8; }
                        </style>
                    </head>
                    <body>
                        <div class="receipt-container">
                            ${receiptContent}
                        </div>
                        <script>
                            setTimeout(() => { window.print(); window.close(); }, 500);
                        </script>
                    </body>
                </html>
    `);

    printWindow.document.close();
  };

  return (
    <div className="relative min-h-screen">
      <Header />

      <div className="flex pt-20 pb-16 px-8">
        <div id="receipt" className="w-3/5 bg-white p-6 shadow-lg">
          <h2 className="text-lg font-semibold mb-2">
            Receipt Pembayaran Service
          </h2>
          <h4 className="text-lg font-semibold mb-2">
            Atas Nama: <span className="font-semibold">{data.name}</span>
          </h4>
          <div className="text-right text-sm border-t border-gray-200 pt-4">
            <p className="text-gray-500">Tanggal Bayar</p>
            <p className="font-semibold">{currentDateTime}</p>
          </div>
          <table className="w-full text-sm text-left border-t border-gray-200 mt-4">
            <thead>
              <tr className="border-b">
                <th className="py-2">Deskripsi</th>
                <th className="py-2 text-center">Quantity</th>
                <th className="py-2 text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">
                    <input
                      type="text"
                      className="w-full border p-1 rounded"
                      value={item.description}
                      onChange={(e) =>
                        handleInputChange(index, "description", e.target.value)
                      }
                    />
                  </td>
                  <td className="py-2 text-center">
                    <input
                      type="number"
                      className="w-16 border p-1 rounded text-center"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        handleInputChange(index, "quantity", e.target.value)
                      }
                    />
                  </td>
                  <td className="py-2 text-right">
                    <input
                      type="number"
                      className="w-20 border p-1 rounded text-right"
                      value={item.amount}
                      step="0.01"
                      min="0"
                      onChange={(e) =>
                        handleInputChange(index, "amount", e.target.value)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 text-sm">
            <p className="font-semibold">Catatan Tambahan</p>
            <p className="text-gray-600">{data.extraNotes}</p>
          </div>
          <div className="border-t border-gray-200 pt-4 mt-4 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatRupiah(totals.subtotal)}</span>
            </div>
            <div className="flex justify-between font-bold text-green-600 text-lg mt-2">
              <span>Total</span>
              <span>{formatRupiah(totals.total)}</span>
            </div>
          </div>
        </div>

        <div className="w-2/5 bg-gray-100 p-6 shadow-lg ml-6">
          <h3 className="text-lg font-semibold mb-4">Fill Receipt Details</h3>
          <label className="block mb-2">
            Name:
            <input
              type="text"
              className="w-full p-2 border rounded mt-1"
              value={data.name}
              onChange={(e) => handleChange(e, "name")}
            />
          </label>
          <label className="block mb-2">
            Extra Notes:
            <textarea
              className="w-full p-2 border rounded mt-1"
              value={data.extraNotes}
              onChange={(e) => handleChange(e, "extraNotes")}
            />
          </label>
          <div className="mt-2 text-right">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={addRow}
            >
              + Add Item
            </button>
          </div>
          <div className="text-center mt-6">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
              onClick={printReceipt}
            >
              Print this receipt
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Receipt;
