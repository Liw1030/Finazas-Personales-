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




// Guardar datos en la tabla 
controller.savegastosv = (req, res) => {
    const data = req.body;
    console.log("Datos recibidos del formulario:", data); // Asegúrate de que esto muestre todos los datos correctos

    req.getConnection((err, conn) => {
        if (err) {
            console.error("Error al conectar con la base de datos:", err);
            res.status(500).send("Error en la conexión con la base de datos");
            return;
        }

        const { nombre_gastov, precio, fecha, categoria } = data;

        const newData = {
            nombre_gastov,
            precio,
            fecha,
            categoria
        };

        conn.query('INSERT INTO gastos_variables SET ?', [newData], (err, result) => {
            if (err) {
                console.error("Error al insertar en la base de datos:", err.sqlMessage);
                res.status(500).send("Error al guardar los datos");
                return;
            }
            console.log("Datos insertados correctamente:", result);
            res.redirect('/gastosv'); // Redirecciona a la lista de gastos variables después de guardar
        });
    });
};




// Actualizar un gasto variable
// Actualizar un gasto variable
controller.updategastosv = (req, res) => { 
    const { id } = req.params;

    req.getConnection((err, conn) => {
        if (err) {
            console.error("Error al conectar con la base de datos:", err);
            res.status(500).send("Error en la conexión con la base de datos");
            return;
        }
        
        conn.query('SELECT * FROM gastos_variables WHERE id = ?', [id], (err, results) => {
            if (err) {
                console.error("Error al obtener el gasto variable:", err);
                res.status(500).send("Error al obtener los datos");
                return;
            }

            // Asegúrate de que results no esté vacío antes de acceder a results[0]
            if (results.length > 0) {
                res.render('customers_editgastosvariables', {
                    data: results[0],
                });
            } else {
                res.status(404).send("Gasto variable no encontrado");
            }
        });
    });
};

controller.newgastosvariables = (req, res) => {
    const { id } = req.params;
    const newGastosv = req.body;

    req.getConnection((err, conn) => {
        if (err) {
            console.error("Error al conectar con la base de datos:", err);
            res.status(500).send("Error en la conexión con la base de datos");
            return;
        }

        conn.query('UPDATE gastos_variables SET ? WHERE id = ?', [newGastosv, id], (err, rows) => {
            if (err) {
                console.error("Error al actualizar el gasto variable:", err);
                res.status(500).send("Error al actualizar los datos");
                return;
            }
            console.log("Datos actualizados correctamente:", rows);
            res.redirect('/gastosv'); // Redirecciona después de actualizar
        });
    });
};


// Eliminar un gasto variable
// Eliminar un gasto variable
controller.deletegastosv = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) => {
        if (err) {
            console.error("Error al conectar con la base de datos:", err);
            res.status(500).send("Error en la conexión con la base de datos");
            return;
        }

        conn.query('DELETE FROM gastos_variables WHERE id = ?', [id], (err, results) => {
            if (err) {
                console.error("Error al eliminar el gasto variable:", err);
                res.status(500).send("Error al eliminar los datos");
                return;
            }
            console.log("Gasto variable eliminado correctamente:", results);
            res.redirect('/gastosv'); // Redirecciona después de eliminar
        });
    });
};



module.exports = controller; 