const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            // Si hay un error en la conexión, envía la respuesta y termina la ejecución
            return res.status(500).json({ error: 'Error en la conexión a la base de datos' });
        }

        conn.query('SELECT * FROM usuarios', (err, customers) => {
            if (err) {
                // Si ocurre un error en la consulta, envía la respuesta y termina la ejecución
                return res.status(500).json({ error: 'Error en la consulta a la base de datos' });
            }
            
            console.log('Consulta exitosa, renderizando página...'); // Verifica si llega hasta aquí
            // Si todo está bien, renderizamos la vista con los datos obtenidos
            res.render('customers', {
                data: customers
            });
        });
    });
};


controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        if (err) {
            return res.status(500).json({ error: 'Error en la conexión a la base de datos' });
        }

        conn.query('INSERT INTO usuarios SET ?', [data], (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Error en la inserción de datos' });
            }

            console.log('Usuario registrado:', result);
            // Redirige a la página home después del registro exitoso
            res.redirect('/home');
        });
    });
};



module.exports = controller;
