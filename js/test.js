class BaseDeDatos {
    constructor() {
      this.Productos = [];
      /* productos */
      this.agregarRegistro(1,  "NotebookLenovoV14", 1000,  "notebooks" );
      this.agregarRegistro(2,  "NotebookLenovoV14", 2000,  "notebooks" );
      this.agregarRegistro(3,  "NotebookLenovoV14", 3000,  "notebooks" );
      this.agregarRegistro(4,  "NotebookLenovoV14", 4000,  "notebooks" );
      this.agregarRegistro(5,  "NotebookLenovoV14", 5000,  "notebooks" );
      this.agregarRegistro(6,  "NotebookLenovoV14", 6000,  "notebooks" );
      this.agregarRegistro(7,  "NotebookLenovoV14", 7000,  "notebooks" );
      this.agregarRegistro(8,  "NotebookLenovoV14", 8000,  "notebooks" );
      this.agregarRegistro(9,  "NotebookLenovoV14", 9000,  "notebooks" );
      this.agregarRegistro(10, "NotebookLenovoV14", 10000, "notebooks" );
      console.log(this.productos);
    }
}