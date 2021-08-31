const mySql = require('mysql')
const pool = mySql.createPool({ 
    connectionLimit: 100,
    host: 'localhost',
    database: 'nodejs_crud',
    user: 'root',
})

exports.view = (req, res) => {
        pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log("connected", connection)

        connection.query('select * from drinks', (err, rows) => {
            connection.release()

            if(!err)
            {res.render('home', {rows})}
            else
            {console.log("err",err)}

            console.log("object", rows)
        })
        
    })
}

exports.findByID = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;
        // console.log("connected", connection)

        let searchComp = req.body.search

        connection.query('select * from drinks where Name like ?', [`%${searchComp}%`], (err, rows) => {
            connection.release()

            if(!err)
            {res.render('home', {rows})}
            else
            {console.log("err",err)}
        })        
    })
}