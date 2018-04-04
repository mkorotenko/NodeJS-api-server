'use strict';
module.exports = function (app) {

    function addRoutesMethods(module, controllerName) {
        for (let route in module.get)
            app.route('/api/' + controllerName + '/' + route)
                .get(module.get[route]);

        for (let route in module.post)
            app.route('/api/' + controllerName + '/' + route)
                .post(module.post[route]);

        for (let route in module.put)
            app.route('/api/' + controllerName + '/' + route)
                .put(module.put[route]);

        for (let route in module.delete)
            app.route('/api/' + controllerName + '/' + route)
                .delete(module.delete[route]);
    }

    //Account
    addRoutesMethods(require('./controllers/account'), 'Account');

    //Dashboards
    addRoutesMethods(require('./controllers/dashboards'), 'Dashboards');

    //Activities
    addRoutesMethods(require('./controllers/activities'), 'Activities');

    //Reports
    addRoutesMethods(require('./controllers/reports'), 'Reports');

    //Lookups
    addRoutesMethods(require('./controllers/lookups'), 'Lookups');

    //Scheduling
    addRoutesMethods(require('./controllers/scheduling'), 'Scheduling');

    //Inventory
    addRoutesMethods(require('./controllers/inventory'), 'Inventory');
    app.route('/api/Activities/Inventory/InventoryEndPeriod')
      .get(require('./controllers/inventory').get.InventoryEndPeriod);
    app.route('/api/Activities/Inventory/ShiftLookups')
      .get(require('./controllers/inventory').get.ShiftLookups);

    //app.route('/tasks/:taskId')
    //  .get(todoList.read_a_task)
    //  .put(todoList.update_a_task)
    //  .delete(todoList.delete_a_task);
};