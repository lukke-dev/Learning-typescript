// Singleton - GoF(livro) | Factory Method - GoF
export class Database {
  private static database: Database;
  constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDB(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retornando uma instancia já criada');
      return Database.database;
    }
    console.log('Criando uma instancia');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDB('localhost', 'root', '123');
db1.connect();

const db2 = Database.getDB('localhost', 'root', '123');
db2.connect();

console.log(db1 === db2);
