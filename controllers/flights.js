const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    show,
    new: newFlight,
    create,
    addDestination,
    deleteFlight,
    addTicket,
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index',{ flights, title:'All flights' })
    });
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
    res.render('flights/show',{ flight, tickets, title:'All flights' })
    });
});
  }

function create (req, res) {
    
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        console.log(flight);
        
        res.redirect('/flights')
    });
    
}

function newFlight(req, res) {
    res.render('flights/new', {title: 'flights'});

}

function addDestination(req, res, next) {
    Flight.findById(req.params.id, function(err, flight) {
      flight.destinations.push(req.body);
      flight.save(function(err, flight) {
          res.redirect(`/flights/${flight._id}`);
      });
    });
  }

  function deleteFlight(req, res) {
    Flight.findByIdAndDelete(req.params.id, function(err, flight){
      if (err) return res.redirect('/flights');
        console.log(flight);
      res.redirect('/flights');
    });
  };
  
  function addTicket(req, res, next) {
    var seat = req.body.seat;
    var price = req.body.price;
    var flight = req.params.id;
    var ticket = new Ticket({seat, price, flight});
    ticket.save(function(err) {
        // one way to handle errors
        if (err) return res.render('flights/new');
        // for now, redirect right back to new.ejs
        res.redirect(`/flights/${req.params.id}`);
    });
  };