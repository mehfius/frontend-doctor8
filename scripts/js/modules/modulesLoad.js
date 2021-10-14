function tabelaLoad(modules, cb) {

    var xmlhttp;

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            var array = JSON.parse(xmlhttp.responseText);

            cb(modulesLoad(array));

        }

    };

    var url = localStorage.getItem("url") + '/admin/json/jsonView.php';
    var e = goa("filters", "1");
    var data = new FormData();

    data.append('session', localStorage.session);
    data.append('area', gA());

    for (var x = 0; x < e.length; x++) {

        if (e[x].value !== "") { data.append(e[x].getAttribute("filternamemodules"), +e[x].value); }

    }

    xmlhttp.open("post", url, true);
    xmlhttp.send(data);

}

function modulesLoad(array) {

    var tabela = cE('tabela');
    var modules = document.body.getAttribute("modules");

    for (var x = 0; x < array.length; x++) {

        var item = cE('item');

        item.setAttribute('c', array[x].codigo);

        if (modules == "medicos" || modules == "pacientes" || modules == "formcovid") {

            loadItemView(item, array[x]);

        } else {

            loadItem(item, array[x]);

        }

        tabela.appendChild(item);

    }

    return tabela;

}
