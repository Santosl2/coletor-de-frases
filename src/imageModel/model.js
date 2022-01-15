export function htmlModelImage(title, background) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Thumbnail</title>
  
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap" rel="stylesheet">
  
    <style>
      body {
        margin: 0;
        font-family: Inter, sans-serif;
        color: #ffffff;
        background-image: url(${background});
        background-size: cover;
        background-position: center;
        height: 100vh;
        position: relative;
      }

      body:before {
        position: absolute;
        content: "";
background: rgba(0, 0, 0, .8);
        width: 100%;
        height: 100%;
        z-index: -1;
      }

      #wrapper {
        max-width: 70%;
        margin: 0 auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
      
      }
      h1 {
        font-size: 62px;
        line-height: 80px;
        max-width: 80%;
      }
      p {
        font-size: 30px;
      }
    </style>
  </head>

  <body>
    <div id="wrapper">
      <h1>"${title}"</h1>

      <p> - Robô de frases</p>
      <small> Gerado de forma automática </small>
    </div>
  </body>
  </body>
  </html>`;
}
