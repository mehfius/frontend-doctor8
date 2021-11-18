
function modulesLoad(array) {

    var tabela   = createObject('{"tag":"tabela"}');

    var modules = document.body.getAttribute("modules");

    Object.entries(array).forEach(([key, value]) => {

      let item   = createObject('{"tag":"item","c":"'+value.id+'"}');

        if (modules == "medicos" || modules == "pacientes" || modules == "formcovid") {

            loadItemView(item, value);

        } else {

            loadItem(item, value);

        }

        tabela.append(item);

    });

/*     for (var x = 0; x < array.length; x++) {

        var item = cE('item');

        item.setAttribute('c', array[x].codigo);

        if (modules == "medicos" || modules == "pacientes" || modules == "formcovid") {

            loadItemView(item, array[x]);

        } else {

            loadItem(item, array[x]);

        }

        tabela.appendChild(item);

    } */

    return tabela;

}