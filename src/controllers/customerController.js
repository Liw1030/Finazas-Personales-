const controller = {};


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM gastos_fijos', (err, customers) => {
            if (err) {
                res.json(err);
            }
            res.render('customers', {
                data:customers
            });
        });
    });
}; 


//Añadir gastos fijos
controller.savegastosf = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO gastos_fijos set ?', [data], (err, customer) =>{
            console.log(customer);
            res.redirect('/');
        });
    });
};

//Actualizar o editar gastos fijos 
controller.updategastosf = (req, res) => { 
    const { id } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM gastos_fijos WHERE id = ?', [id], (err, results) => {
            res.render('customers_editgastosfijos', {
                data: results[0],
            });
        });
    });
};

controller.newgastosfijos = (req, res) =>{
    const { id } = req.params;
    const newGastof = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE gastos_fijos set ? WHERE id = ?', [newGastof, id], (err, rows) =>{
            res.redirect('/')
        });
    });
};


//Eliminar gastos fijos 
controller.deletegastosf = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM gastos_fijos WHERE id = ?', [id], (err, results) => {
            res.redirect('/');
        });
    });
};




//Añadir gastos variables 
controller.savegastosV = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO gastos_variables set ?', [data], (err, customer) =>{
            console.log(customer);
            res.redirect('/');
        });
    });
};

module.exports = controller; 