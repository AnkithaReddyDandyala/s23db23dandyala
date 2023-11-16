var makeup = require("../models/makeup");

// List of all makeup
exports.makeup_list = async function (req, res) {
    try {
        themakeup = await makeup.find();
        res.send(themakeup);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific makeup.
exports.makeup_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: makeup detail: ' + req.params.id);
};

// Handle makeup create on POST.
exports.makeup_create_post = async function (req, res) {
    console.log(req.body)
    let document = new makeup();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.brand = req.body.brand;
    document.id = req.body.id;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle makeup delete form on DELETE.
exports.makeup_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await makeup.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
    };
    

// Handle makeup update form on PUT.
exports.makeup_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: makeup update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.makeup_view_all_Page = async function (req, res) {
    try {
        themakeup = await makeup.find();
        res.render('makeup', { title: 'makeup Search Results', results: themakeup });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


exports.makeup_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await makeup.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

exports.makeup_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
        ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await makeup.findById(req.params.id)
        // Do updates of properties
        if (req.body.brand)
            toUpdate.brand = req.body.brand;
        if (req.body.id) toUpdate.id = req.body.id;
        if (req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
    }
};

// Handle a show one view with id specified by query
exports.makeup_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await makeup.findById(req.query.id)
        res.render('makeupdetail', { title: 'Makeup Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

    // Handle building the view for creating a vehicle.
    // No body, no in path parameter, no query.
    // Does not need to be async
exports.makeup_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('makeupcreate', { title: 'Makeup Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for updating a costume.
// query provides the id
exports.makeup_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await makeup.findById(req.query.id)
        res.render('makeupupdate', { title: 'Makeup Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// Handle a delete one view with id from query
exports.makeup_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await makeup.findById(req.query.id)
        res.render('makeupdelete', {
            title: 'Makeup Delete', toShow: result});
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};