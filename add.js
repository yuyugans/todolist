const task = document.getElementById("task")
const list = document.querySelector(".list")
const tgl = document.getElementById("tgl")
const done = document.querySelector(".done")

function clk() {
  if (task.value === "") {
    alert("Isi terlebih dahulu");
  } else {
    var li = document.createElement("li");
    var ceklis = document.createElement("input");
    var label = document.createElement("label");
    var tglValue = new Date(tgl.value);
    var options = { weekday: 'long' };
    var hari = tglValue.toLocaleDateString('id-ID', options);

    ceklis.setAttribute("type", "checkbox");
    ceklis.classList.add("cek");
    label.innerHTML = task.value + " | " + tgl.value + " - " + hari;

    li.appendChild(ceklis); 
    li.appendChild(label); 
    list.appendChild(li);

    tgl.value = "";
    task.value = "";
  }

  list.addEventListener("change", (e) => {
    if (e.target.tagName === "INPUT" && e.target.checked) {
      e.target.parentElement.remove();
    }
  });
}

  