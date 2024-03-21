# tele-cat
auto test


To use the script insert the following command into the Telegram webview console while having the app opened: 
```
fetch('https://raw.githubusercontent.com/demondvn/telegram-cat-game/main/index.js').then(response => response.text()).then(script => eval(script));
```
