let req = new XMLHttpRequest();
let btn = document.querySelector('.generate-btn');
let password = document.querySelector('.passwords');
let url = "https://passwordinator.onrender.com/?num=true";
let copiedText = '';
let copyBtn = document.querySelector('.fa-copy');
let copyMsg = document.querySelector('.copiedMsg');

let customAttr = password.getAttribute('data-text'); 
password.textContent = customAttr;

navigator.permissions.query({ name: "write-on-clipboard" }).then((result) => {
  if (result.state == "granted" || result.state == "prompt") {
    alert("Write access granted!");
  }
});


let generate = () => {
    fetch(url)
    .then(data => data.json())
    .then((item)  => {
	copiedText = password.textContent = item.data;
	  copyMsg.style.display = 'none';
	    customAttr.style.all = 'none';
    });
};

btn.addEventListener('click',generate,false)

  const copyContent = async () => {
	  try {
      await navigator.clipboard.writeText(copiedText);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
	  copyMsg.style.display = 'block';
  }


copyBtn.addEventListener('click', copyContent)


