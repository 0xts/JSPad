export const html = `
   <html>
   <head><style>html {background-color: white;} </style></head>
   <body>
    <div id="root"></div>
    <script>
      const handleError = (err) => {
        const [type, message] = err.toString().split(":");
        const root = document.querySelector("#root");
        root.innerHTML = '<div style="color: red;"><h4>' + type + ':</h4>' + message + '</div>';
        console.error(err);
      }

      window.addEventListener("error", (event) => {
        event.preventDefault();
        handleError(event.error);
      });

      window.addEventListener("message", (event) => {
        try {
          eval(event.data);
        } catch(err) {
            handleError(err);
        }
    }, false);
  </script>
   </body>
   </html>
  `;
