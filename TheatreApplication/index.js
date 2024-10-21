var Theatre = /** @class */ (function () {
    function Theatre(totalSeats) {
        this.seats = [];
        this.totalSeats = totalSeats;
        for (var i = 1; i <= totalSeats; i++) {
            this.seats.push({ seatNumber: i, isBooked: false });
        }
    }
    Theatre.prototype.bookSeat = function (seatNumber) {
        var seat = this.seats.find(function (seat) { return seat.seatNumber === seatNumber; });
        if (seat) {
            if (!seat.isBooked) {
                seat.isBooked = true;
                console.log("Seat ".concat(seatNumber, " has been booked."));
            }
            else {
                console.log("Seat ".concat(seatNumber, " is already booked."));
            }
        }
        else {
            console.log("Invalid seat number ".concat(seatNumber, "."));
        }
    };
    Theatre.prototype.cancelSeat = function (seatNumber) {
        var seat = this.seats.find(function (seat) { return seat.seatNumber === seatNumber; });
        if (seat) {
            if (seat.isBooked) {
                seat.isBooked = false;
                console.log("Booking for seat ".concat(seatNumber, " has been canceled."));
            }
            else {
                console.log("Seat ".concat(seatNumber, " was not booked."));
            }
        }
        else {
            console.log("Invalid seat number ".concat(seatNumber, "."));
        }
    };
    Theatre.prototype.viewAvailableSeats = function () {
        var availableSeats = this.seats.filter(function (seat) { return !seat.isBooked; });
        if (availableSeats.length > 0) {
            console.log('Available seats:', availableSeats.map(function (seat) { return seat.seatNumber; }));
        }
        else {
            console.log('No available seats.');
        }
    };
    return Theatre;
}());
var theatre = new Theatre(10);
theatre.viewAvailableSeats();
theatre.bookSeat(3);
theatre.bookSeat(3);
theatre.viewAvailableSeats();
theatre.cancelSeat(3);
theatre.cancelSeat(4);
theatre.bookSeat(8);
theatre.bookSeat(2);
theatre.bookSeat(6);
theatre.viewAvailableSeats();
