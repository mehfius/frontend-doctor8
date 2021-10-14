function startIndexedDB(data){
  
  const dbName = "suite8";

  //const DadosClientes = [data];

const DadosClientes = [
  { codigo: "333-44-4444", label: "aaaa"},
  { codigo: "777-55-5555", label: "bbbb"}
];

  var request = indexedDB.open(dbName, 3);

  request.onerror = function(event) {
    // Tratar erros.
  };
  request.onupgradeneeded = function(event) {
    var db = event.target.result;

    // Cria um objectStore para conter a informação sobre nossos clientes. Nós vamos
    // usar "ssn" como key path porque sabemos que é único;
    var objectStore = db.createObjectStore("users", { keyPath: "codigo" });

    // Cria um índice para buscar clientes pelo nome. Podemos ter nomes
    // duplicados, então não podemos usar como índice único.
    objectStore.createIndex("codigo", "codigo", { unique: false });

    // Cria um índice para buscar clientes por email. Queremos ter certeza
    // que não teremos 2 clientes com o mesmo e-mail;
    objectStore.createIndex("label", "label", { unique: true });

    // Usando transação oncomplete para afirmar que a criação do objectStore
    // é terminada antes de adicionar algum dado nele.
    objectStore.transaction.oncomplete = function(event) {
      // Armazenando valores no novo objectStore.
      var clientesObjectStore = db.transaction("users", "readwrite").objectStore("users");
      for (var i in DadosClientes) {
        clientesObjectStore.add(DadosClientes[i]);
      }
    }
  };
  
}