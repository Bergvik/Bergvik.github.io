<!DOCTYPE: html>
<html lang="en">
  <head>
    <title>Page title</title>
    <meta charset="UTF-8">
    <meta name="Author" content="Jonas Amundsen">
    <meta name="Description" content="Test">
    <meta name="keywords" content="HTML, CSS, Python, Javascript">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <script src="scripts.js"></script>
  </head>
  <body>
    <div class="content">
      <div class="tab">
        <button class="tablink" onclick="openTab(event, 'home')" id="defaultOpen">Home</button>
        <button class="tablink" onclick="openTab(event, 'about')">About</button>
        <button class="tablink" onclick="openTab(event, 'contact')">Contact</button>
        <button class="tablink" onclick="openTab(event, 'tools')">Tools</button>
      </div>
      <div id="home" class="tabcontent">
        <div class="header">
          <h1>Welcome to this website</h1>
          <p>Hello world!</p>
        </div>
        <img src="https://i.imgur.com/drq7rf3.gif">
      </div>
      <div id="about" class="tabcontent">
        <h2>About me</h2>
        <p>My name is Jonas Amundsen.<br>
          I'm making this site to learn about html, css, python and javascript.
        </p>
      </div>
      <div id="contact" class="tabcontent">
        Jonas Amundsen<br>
        Norway
      </div>
      <div id="tool" class="tabcontent">
        <h3>Here are my python tools</h3>
      </div>
    </div>
    <script>
      document.getElementById("defaultOpen").click();
    </script>
  </body>
</html>
