import { useState } from "react";
import "./App.css";

function App() {
  const [method, setMethod] = useState("GET");

  const [url, setUrl] = useState(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  const [body, setBody] = useState(`{
  "title": "Hello",
  "body": "Testing API",
  "userId": 1
}`);

  const [response, setResponse] = useState("");
  const [status, setStatus] = useState("-");

  const sendRequest = async () => {
    setStatus("Loading...");
    setResponse("Sending request...");

    try {
      const options = {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (method === "POST" || method === "PUT") {
        options.body = body;
      }

      const res = await fetch(url, options);

      const data = await res.json();

      setStatus(`${res.status} ${res.statusText}`);

      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      setStatus("Error");
      setResponse(error.message);
    }
  };

  return (
    <div className="container">

      <h1>API TESTER DASHBOARD</h1>

      {/* Method Buttons */}
      <div className="methods">

        <button
          className={method === "GET" ? "active" : ""}
          onClick={() => setMethod("GET")}
        >
          GET
        </button>

        <button
          className={method === "POST" ? "active" : ""}
          onClick={() => setMethod("POST")}
        >
          POST
        </button>

        <button
          className={method === "PUT" ? "active" : ""}
          onClick={() => setMethod("PUT")}
        >
          PUT
        </button>

        <button
          className={method === "DELETE" ? "active" : ""}
          onClick={() => setMethod("DELETE")}
        >
          DELETE
        </button>

      </div>


      <div className="main">

        {/* REQUEST SECTION */}

        <div className="box">

          <h2>Request</h2>

          <div className="url-box">

            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>

            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter API URL"
            />

          </div>


          <label>Request Body</label>

          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter JSON body"
          ></textarea>


          <button className="send" onClick={sendRequest}>
            Send Request
          </button>

        </div>


        {/* RESPONSE SECTION */}

        <div className="box">

          <h2>Response</h2>

          <p className="status">
            Status: <b>{status}</b>
          </p>

          <pre>
            {response || "Response will appear here..."}
          </pre>

        </div>

      </div>

    </div>
  );
}

export default App;