import knex from "knex";

const connection = knex({
    client: "mysql",
    connection:{
        host:"35.226.146.116",
        port: 3306,
        user:"2147328-felipe-melo",
        password:"5!!KTqaBazJvNPTwRkYC",
        database:"lovelace-2147328-felipe-melo",
        multipleStatements: true

    }
})

export default connection