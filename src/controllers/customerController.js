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




//guardar datos en la tabla 
controller.savegastosv = (req, res) => {
    const data = req.body;
    console.log("Datos recibidos del formulario:", data);

    req.getConnection((err, conn) => {
        if (err) {
            console.error("Error al conectar con la base de datos:", err);
            res.status(500).send("Error en la conexión con la base de datos");
            return;
        }

        // Cambia nombre_gastov si es necesario para que coincida
        conn.query('INSERT INTO gastos_variables SET ?', [data], (err, result) => {
            if (err) {
                console.error("Error al insertar en la base de datos:", err.sqlMessage);
                res.status(500).send("Error al guardar los datos");
                return;
            }
            console.log("Datos insertados correctamente:", result);
            res.redirect('/');
        });
    });
};



// Actualizar un gasto variable
controller.updategastosv = (req, res) => { 
    const { id } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM gastos_variables WHERE id = ?', [id], (err, results) => {
            res.render('customers_editgastosvariables', {
                data: results[0],
            });
        });
    });
};

controller.newgastosvariables = (req, res) => {
    const { id } = req.params;
    const newGastosv = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE gastos_variables set ? WHERE id = ?', [newGastosv, id], (err, rows) => {
            res.redirect('/gastosv');
        });
    });
};

// Eliminar un gasto variable
controller.deletegastosv = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM gastos_variables WHERE id = ?', [id], (err, results) => {
            res.redirect('/');
        });
    });
};




module.exports = controller; 