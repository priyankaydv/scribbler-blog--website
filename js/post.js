function saveEdits() {
  var x = document.getElementById("toggle");
  console.log(x.innerHTML);
  if (x.innerHTML > 0) {
    document.getElementById("editPara").contentEditable = true;
    document.getElementById("editTitle").contentEditable = true;
    x.innerHTML = 0;
    document.getElementById("save").value = "Save";



  } else {
    x.innerHTML = 1;
    document.getElementById("save").value = "Edit";
    document.getElementById("editPara").contentEditable = false;
    document.getElementById("editTitle").contentEditable = false;

  }
}


var button = document.getElementById("clickme"),
  count = 0;
var para = document.getElementById("hide");
button.onclick = function () {
  para.innerHTML = " ";

  count += 1;
  button.innerHTML = "Liked !";
  var likeEdit = document.getElementById("temp");
  likeEdit.innerHTML = "\nThe user has liked" + " " + count + " " + "times!";
};

window.onclick = function (e) {
  var id = e.target.id;
  if (id === 'sent') {
    var txtbox = document.getElementById('example');
    var txt = txtbox.value;
    var p = document.createElement('p');
    p.className = "pcom";
    p.id = "commentpara";
    p.innerHTML = txt;
    var parent = document.getElementById('paraBox');
    parent.appendChild(p);

    $(txtbox).val('');
  }
}