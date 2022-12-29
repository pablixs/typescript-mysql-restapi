import { createPool } from "mysql2/promise";

export async function connect(){

    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        database: 'node_mysql_ts',
        password: 'Hachigatsujuunana147258!',
        connectionLimit: 10
    });

    return connection;
}